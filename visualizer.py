#!/usr/bin/python
from sys import argv
from os.path import join, isfile, basename
from lib.html import generate_html

if len(argv) < 2:

    print 'Bad arguments : visualizer.py images_folder'
    print 'For more information, please see doc folder.'
    exit()

clusters_file_path = join(argv[1], 'clusters.json')

if not isfile(clusters_file_path):
    print("The file \"" + clusters_file_path + "\" does not exist.")
    exit()

visualizer_file = join('results', basename(argv[1]) + '.html')
generate_html(clusters_file_path, visualizer_file)
print("\"" + visualizer_file + "\" generated.")

