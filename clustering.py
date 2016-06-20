#!/usr/bin/python
from sys import argv
from os.path import isfile, join
from lib.infoFile import InfoFile
from lib._cluster import Cluster


if len(argv) < 3:
    print 'Bad arguments : clustering.py images_folder algorithm [param1 param2 ...]'
    print 'images_folder : Folder containing images and info file.'
    print 'algorithm : Name fo the algorithm : kmeans, dbscan, birch or kmeans_dbscan_factor.'
    print 'For more information, please see doc folder.'
    exit()

info_file_path = join(argv[1], 'info.txt')

# Check if the info file exists
if not isfile(info_file_path):
    print("The file \"" + info_file_path + "\" does not exist.")
    exit()

available_algo = [['kmeans', 1, 1], ['dbscan', 0, 2], ['birch', 0, 2], ['kmeans_dbscan_factor', 0, 3]]
algo_name = argv[2]
algo_params_len = len(argv) - 3

# Check if the chosen algorithm is good and have good parameters
check_name = False
check_param = False
for algo in available_algo:
    if algo_name == algo[0]:
        check_name = True
        min_param = algo[1]
        max_param = algo[2]
        if min_param <= algo_params_len <= max_param:
            check_param = True

# If the algorithm is not recognized
if not check_name:
    print("The \"" + algo_name + "\" algorithm was not recognized. kmeans, dbscan, birch and kmeans_dbscan_factor are available.")
    exit()

# If the given parameters are bad
if not check_param:
    if max_param == 0:
        print("The " + algo_name + " algorithm does not need parameter. See doc folder for more information.")
    elif max_param == min_param:
        print("The " + algo_name + " algorithm needs exactly " + str(max_param) + " parameter. See doc folder for more information.")
    else :
        print("The " + algo_name + " algorithm needs between " + str(min_param) + " and " + str(max_param) + " parameters. See doc folder for more information.")
    exit()

infoFile = InfoFile(info_file_path)
cluster = infoFile.get_cluster()
clusters = []

# Execute algorithms
if algo_name == "kmeans":
    n_cluster = int(argv[3])
    if n_cluster < 2:
        print("The number of cluster must be greater than 2.")
        exit()
    clusters = cluster.split_kmeans(n_cluster)

if algo_name == "dbscan":
    # Default values
    eps = 0.04
    min_samples = 12
    if algo_params_len == 0:
        argv.append(0.04)
        argv.append(12)
    if algo_params_len == 1:
        eps = float(argv[3])
        argv.append(0)
    if algo_params_len == 2:
        eps = float(argv[3])
        min_samples = int(argv[4])
    if eps < 0 or eps > 1:
        print("The eps value must be between 0 and 1.")
        exit()
    if min_samples < 0:
        print("The min_sample value must be positive.")
        exit()
    clusters = cluster.split_dbscan(eps, min_samples)

if algo_name == "birch":
    # Default values
    branching_factor = 5
    threshold = 0.1
    if algo_params_len == 0:
        argv.append(5)
        argv.append(0.1)
    if algo_params_len == 1:
        branching_factor = int(argv[3])
        argv.append(0.1)
    if algo_params_len == 2:
        branching_factor = int(argv[3])
        n_clusters = float(argv[4])
    if threshold < 0:
        print("The min_sample value must be positive.")
    clusters = cluster.split_birch(branching_factor, threshold)

if algo_name == "kmeans_dbscan_factor":
    # Default values
    factor = 0.6
    eps = 0.04
    min_samples = 12
    if algo_params_len == 0:
        argv.append(0.6)
        argv.append(0.04)
        argv.append(12)
    if algo_params_len == 1:
        factor = float(argv[3])
        argv.append(0.04)
        argv.append(0)
    if algo_params_len == 2:
        factor = float(argv[3])
        eps = float(argv[4])
        argv.append(0)
    if algo_params_len == 2:
        factor = float(argv[3])
        eps = float(argv[4])
        min_samples = int(argv[5])
    if factor < 0:
        print("The corrector value must be between 0 and 1.")
        exit()
    if eps < 0 or eps > 1:
        print("The eps value must be between 0 and 1.")
        exit()
    if min_samples < 0:
        print("The min_sample value must be positive.")
        exit()

    n_clusters = len(cluster.split_dbscan(eps, min_samples))
    n_clusters_corrected = int(n_clusters * factor)
    print(str(n_clusters) + " found. Corrected number : " + str(n_clusters_corrected))
    clusters = cluster.split_kmeans(n_clusters_corrected)

# Get used algorithm
used_algo = algo_name + '(' + ', '.join(map(str, argv[3:])) + ')'

# Save file into the images folder
clusters_file = join(argv[1], 'clusters.json')
Cluster.save_clusters(clusters_file, used_algo, clusters)

# Print information
print("You can find results of " + used_algo + " algorithm in the file \"" + clusters_file + "\".")
