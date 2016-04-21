## Description

This tool is designed to be used after the `clustering`. It is the last part of the project.
The goal is to be able to visualize results and make statistics from them.

## Usage

    visualizer.py images_folder
    
  * images_folder : Folder containing images and info file.
  
Example :

    visualizer.py ./output/2015-11-26_12_50_00-13_49_59
    
After execution, a html file is created in the `results` folder. You only have
to open it in a browser to visualize the result. This file uses dependencies which
are contained in the `resources` directory and shows images contained in the `images_folder`
directory. That is the main reason you cannot move this file.

## Requirement

This tool requires python 2.7.

