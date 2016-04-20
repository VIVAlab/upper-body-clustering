## Description

This tool is designed to be used after the `organizer`. It is the second part of the project.
The goal is to create clusters using algorithms with different parameters.

There are actually four implementations of clustering algorithms.

## Usage

    clustering.py images_folder algorithm [param1 param2 ...]
    
  * images_folder : Folder containing images and info file.
  * algorithm : Name fo the algorithm : kmeans, dbscan, birch or kmeans_dbscan_factor.
  * [param1 param2 ...] : Optional parameters for algorithm.
  
Example :

    clustering.py ./output/2015-11-26_12_50_00-13_49_59 kmeans 10

## [K-means clustering](https://en.wikipedia.org/wiki/K-means_clustering)

This algorithm require one parameter, a number of cluster

    clustering.py images_folder_ kmeans n_clusters_
    
Example :

    clustering.py ./output/2015-11-26_13_50_00-14_49_59 kmeans 25
    
## [DBSCAN algorithm](https://en.wikipedia.org/wiki/DBSCAN)

This algorithm have two optional parameters :

  * eps (default value if not given : 0.04)
  * min_samples (default value if not given : 12)
  
You can find more information [here](https://en.wikipedia.org/wiki/DBSCAN) about these parameters.
  
Usage :

    clustering.py ./output/2015-11-26_13_50_00-14_49_59 dbscan              (eps=0.04, min_samples=12)
    clustering.py ./output/2015-11-26_13_50_00-14_49_59 dbscan 0.06         (eps=0.06, min_samples=12)
    clustering.py ./output/2015-11-26_13_50_00-14_49_59 dbscan 0.03 11      (eps=0.03, min_samples=11)
    

## [BIRCH algortihm](https://en.wikipedia.org/wiki/BIRCH)

This algorithm have two optional parameters :

  * branching_factor (default value if not given : 5)
  * threshold (default value if not given : 0.1)
  
You can find more information [here](https://en.wikipedia.org/wiki/DBSCAN) about these parameters.
  
Usage :

    clustering.py ./output/2015-11-26_13_50_00-14_49_59 birch               (branching_factor=5, threshold=0.1)
    clustering.py ./output/2015-11-26_13_50_00-14_49_59 birch 3             (branching_factor=3, threshold=0.1)
    clustering.py ./output/2015-11-26_13_50_00-14_49_59 birch 4 0.2         (branching_factor=4, threshold=0.2)

## [K-means DBSCAN with factor

This algorithm have three optional parameters :

  * factor (default value if not given : 0.6)
  * eps (default value if not given : 0.04)
  * min_samples (default value if not given : 12)
  
The process of this algorithm is simple. Firstly, the DBSCAN algorithm is run using `eps` and `min_samples` parameters.
This first step produces a number of clusters which is corrected by the `factor` parameter. Then, the k-means algorithm
is run with the corrected result as input.

For example, if DBSCAN(eps, min_samples) produces 100 as number of clusters, then kmeans(100*factor) is run.
 
Usage :

    clustering.py ./output/2015-11-26_13_50_00-14_49_59 kmeans_dbscan_factor                (factor=0.6, eps=0.04, min_samples=12)
    clustering.py ./output/2015-11-26_13_50_00-14_49_59 kmeans_dbscan_factor 0.5            (factor=0.5, eps=0.04, min_samples=12)
    clustering.py ./output/2015-11-26_13_50_00-14_49_59 kmeans_dbscan_factor 0.6 0.03       (factor=0.6, eps=0.03, min_samples=12)
    clustering.py ./output/2015-11-26_13_50_00-14_49_59 kmeans_dbscan_factor 0.6 0.02 10    (factor=0.6, eps=0.02, min_samples=10)
    
## Requirement

This tool requires python 2.7 and [scikit-learn](http://scikit-learn.org/stable/install.html).