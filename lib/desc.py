from os import chdir, popen
from os.path import abspath, dirname, basename


# Extract descriptor one-by-one from command line
def get_desc(exe_path, image_path):

    # Change the working dir
    exe_name = basename(exe_path)
    abs_path = abspath(exe_path)
    chdir(dirname(abs_path))

    # Execute command
    return popen(exe_name + ' desc ' + image_path).read()
