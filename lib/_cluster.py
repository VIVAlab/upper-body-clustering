from sklearn.cluster import KMeans, DBSCAN, Birch
from json import dumps


class Cluster:

    # Save data about all the clusters in a json format
    @staticmethod
    def save_clusters(path, method, clusters):
        array = []
        for c in clusters:

            files = c.files
            for i in range(0, len(files), 1):
                files[i].__dict__.pop('dataset', None)
                files[i].__dict__.pop('path', None)
            array.append({'name': c.name, 'directory': c.directory, 'count': c.count, 'method': method, 'files': files})

        data = dumps(array, default=lambda o: o.__dict__, indent=4)
        f = open(path, 'w+')
        f.write(data)

    def __init__(self, directory, name):

        self.directory = directory
        self.name = name
        self.files = []
        self.count = 0

    def add_file(self, f):

        self.files.append(f)
        self.count += 1

    # Using k-means algorithm
    def split_kmeans(self, n_clusters):

        # Extract dataset from files
        dataset = [f.dataset for f in self.files]

        # Initialize classifier
        classifier = KMeans(n_clusters)

        # Fit dataset
        classifier.fit(dataset)

        # Get index
        index = classifier.predict(dataset)

        # Create new clusters
        clusters = [Cluster(self.directory, self.name + '-' + str(i)) for i in range(n_clusters)]
        for i in range(0, len(self.files), 1):
            clusters[index[i]].add_file(self.files[i])

        return clusters

    def split_dbscan(self, eps, min_samples):

        # Extract dataset from files
        dataset = [f.dataset for f in self.files]

        # Initialize classifier
        classifier = DBSCAN(eps=eps, min_samples=min_samples)

        # Fit dataset
        index = classifier.fit_predict(dataset)

        count = max(index) + 2

        clusters = [Cluster(self.directory, self.name + '-' + str(i)) for i in range(count)]
        clusters[count - 1].name = 'na'
        for i in range(0, len(self.files), 1):
            clusters[index[i] % count].add_file(self.files[i])

        return clusters

    def split_birch(self, branching_factor, threshold):

        # Extract dataset from files
        dataset = [f.dataset for f in self.files]

        # Initialize classifier
        classifier = Birch(branching_factor=branching_factor, n_clusters=None, threshold=threshold)

        classifier.fit(dataset)

        # Get index
        index = classifier.predict(dataset)

        count = max(index) + 1

        # Create new clusters
        clusters = [Cluster(self.directory, self.name + '-' + str(i)) for i in range(count)]
        for i in range(0, len(self.files), 1):
            clusters[index[i]].add_file(self.files[i])

        return clusters
