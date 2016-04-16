from os.path import isfile, dirname, relpath
from lib.file import File
from _cluster import Cluster


class InfoFile:

    def __init__(self, path):

        if isfile(path) is False:
            raise ValueError('The file "' + path + '" does not exist.')

        self.path = path
        self.directory = relpath(dirname(path), './')

    # Get a cluster
    def get_cluster(self):

        cluster = Cluster(self.directory, '0')

        # Open file
        with open(self.path, 'r') as lines:

            # Read lines
            for line in lines:

                # Extract values
                values = line.split(' ')
                cluster.add_file(File(self.directory,
                                      values[0],
                                      int(values[1]),
                                      int(values[2]),
                                      int(values[3]),
                                      map(float, values[4:-1])))

        return cluster
