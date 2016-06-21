from os import chdir, popen, getcwd
from os.path import abspath, dirname, basename, join


# Extract descriptor one-by-one from command line
def get_desc(exe_path, image_path):

    # Change the working dir
    exe_name = basename(exe_path)
    abs_path = abspath(exe_path)
    current = getcwd()
    chdir(dirname(abs_path))
    
    # Execute command
    result = popen(join(".", exe_name) + ' desc ' + image_path).read()
    chdir(current)
    return result