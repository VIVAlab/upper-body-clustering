## Description

This repository contains some tools to cluster data and analyze the results.
Following few steps, you can easily apply clustering algorithms. If you have any question, do not hesitate to contact [me](mailto:leo@loza.ch).

## First step : organize and get descriptors

The first step is to select a folder and a period to analyze.
You have to use the `organizer` tool (see doc folder more information).

    organizer.py serviceTimerPath input output period
    
  * serviceTimerPath : path of the `serviceTimer` application which extracts `descriptors`.
  * input : path of the input directory which contains all images.
  * output : path of the output directory which will contains all sorted images.
  * period : duration in `seconds` to separate images.
 
Example : 

    organizer.py serviceTimer.exe images ./output 3600
  
Note : In our situation, let "output" as output directory. be sure that the script's folder is the working dir.

This step is the longer step, but once it is done, you do not have to do it again,
only if you want to separate your files by another period.

At the end of this step, you should have some directories like this example :

    ./output/2015-11-26_12_50_00-13_49_59
    ./output/2015-11-26_13_50_00-14_49_59
    ./output/2015-11-26_14_50_00-15_49_59
    ./output/2015-11-26_15_50_00-16_49_59
    ./output/2015-11-26_16_50_00-17_49_59
  
In every of these directories you can find a file `info.txt` containing all descriptors (see doc folder more information).
    
## Second step : clustering your images

Now, you can process very efficiently many clustering algorithms on your images.
You have to use the `clustering` tool (see doc folder more information).
    
    clustering.py images_folder algorithm [arg1 arg2 ...]
    
Example : 

    clustering.py ./output/2015-11-26_12_50_00-13_49_59 kmeans 10

Note : If you want to apply another algorithm, you can directly jump to this step.
You do not have to make the first step again.

## Third step : visualize your results

To finish, you can rapidly generate a web interface to visualize your result and evaluate them.
You have to use the `visualizer` tool (see doc folder more information).

    visualizer.py images_folder

Example :

    visualizer.py ./output/2015-11-26_12_50_00-13_49_59
    
The result is written in the script's directory. It is an html page which shows results.

## Notes
All these tools require [scikit-learn](http://scikit-learn.org/stable/install.html) and python 2.7.
