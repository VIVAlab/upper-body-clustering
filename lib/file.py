import os
from os.path import basename
from os.path import isfile


class File:

    def __init__(self, path, name, epoch, camera, capture, dataset):

        self.path = path
        self.name = name
        self.epoch = epoch
        self.camera = camera
        self.capture = capture
        self.dataset = dataset

    def get_summary(self):
        return {self.name, self.epoch, self.camera, self.capture}

    @staticmethod
    def from_path(path):

        if isfile(path) is False:
            raise ValueError('The file "' + path + '" does not exist.')

        # Get value from filename
        name = basename(path)
        end_without_ext = os.path.splitext(name)[0]

        l = len(end_without_ext)
        info = end_without_ext[l-6:]
        capture = info[:3]
        camera = info[3:]
        epoch = int(end_without_ext[:-6])

        return File(path, name, epoch, camera, capture, 'N/A')

    @staticmethod
    def sort(f1, f2):
        if f1.epoch < f2.epoch:
            return -1
        elif f1.epoch == f2.epoch:
            return 1
        else:
            return 0
