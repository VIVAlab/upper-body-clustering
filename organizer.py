#!/usr/bin/python
from sys import argv, exit, stdout
from os import listdir, mkdir
from os.path import isfile, isdir, join, abspath
from lib.file import File
from lib.date import floor_second_epoch, epoch_to_dir_name
from lib.desc import get_desc
from shutil import copyfile, rmtree

if len(argv) < 5:
    print 'Bad arguments : organizer.py serviceTimerPath input output period'
    print 'serviceTimerPath : path of the serviceTimer application'
    print 'input : input directory which contains images'
    print 'output : output directory which will contains sorted images'
    print 'period : period (in seconds) to separate images'
    print 'For more information, please see doc folder.'
    exit()

if isfile(argv[1]) is False:
    print 'The executable "' + argv[1] + '" does not exist.'
    exit()

if isdir(argv[2]) is False:
    print 'The input "' + argv[2] + '" is not a valid directory.'
    exit()

if argv[4].isdigit() is False:
    print 'The period "' + argv[4] + '" is not valid.'
    exit()

exe_path = argv[1]
input = abspath(str(argv[2]))
output = abspath(str(argv[3]))
period = int(argv[4])

if isdir(output) is True:
    rmtree(output)
mkdir(output)

print 'Starting file listing...'

# Get all files from the input directory and sort them
files = [File.from_path(join(input, f)) for f in listdir(input) if isfile(join(input, f)) and f != 'info.txt']
files.sort(File.sort)

print str(len(files)) + ' files listed.'

# Get the oldest and the newest file
oldest = floor_second_epoch(files[0].epoch)
newest = floor_second_epoch(files[-1].epoch)

print 'Start the extraction of file descriptors.'
i = 0
l = len(files)
for f in files:
    f.desc = get_desc(exe_path, f.path)
    i += 1
    stdout.write('\r')
    stdout.flush()
    stdout.write(str(i) + '/' + str(l) + ' (' + str(round(i / float(l), 3) * 100) + '%)')

# Create dir structure
dir = []
while oldest < newest:
    dir.append([join(output, epoch_to_dir_name(oldest, period - 1)), oldest, oldest + period * 1000 - 1, []])
    mkdir(dir[-1][0])
    oldest += period * 1000 - 1

print('\n' + str(len(dir)) + ' directories created.')
print('Starting file sorting...')

# Sort files
for f in files:
    for i in dir:
        if i[1] <= f.epoch <= i[2]:
            copyfile(f.path, join(i[0], f.name))
            i[3].append(f)

# For each folder, extract files descriptor and put it in a file
for d in dir:
    content = ''
    for f in d[3]:
        content += f.name + ' ' + str(f.epoch) + ' ' + str(f.capture) + ' ' + str(f.camera) + ' ' + f.desc + '\n'
    info = open(join(d[0], 'info.txt'), 'w+')
    info.write(content)

print str(len(files)) + ' files sorted.'

