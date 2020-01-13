import os
import numpy as np
import cv2 as cv

dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, 'relative/path/to/file/you/want')

# Load a color image in grayscale
img = cv.imread(os.path.join(os.path.dirname(__file__), 'Z4N0R.png'))
# https://docs.opencv.org/4.1.2/d4/da8/group__imgcodecs.html#ga288b8b3da0892bd651fce07b3bbd3a56
# img = cv.imread('src/Z4N0R.png')
cv.imshow('image', img)
cv.waitKey(0)
cv.destroyAllWindows()
# print(img, os.path.dirname(__file__), os.path.join(os.path.dirname(__file__), 'V.jpg'))