import datetime


# Remove seconds from epoch to get a epoch ending by 0 second
def floor_second_epoch(epoch):
    date = datetime.datetime.fromtimestamp(epoch / 1000)
    return epoch - (date.second * 1000)


# Convert an epoch to a string
def epoch_to_string(epoch):
    date = datetime.datetime.fromtimestamp(epoch / 1000)
    month = str(date.month) if date.month > 9 else '0' + str(date.month)
    day = str(date.day) if date.day > 9 else '0' + str(date.day)
    hour = str(date.hour) if date.hour > 9 else '0' + str(date.hour)
    minute = str(date.minute) if date.minute > 9 else '0' + str(date.minute)
    second = str(date.second) if date.second > 9 else '0' + str(date.second)
    return str(date.year) + '-' + month + '-' + day + '_' + hour + '_' + minute + '_' + second


# Create a dir name from an epoch and a period
def epoch_to_dir_name(epoch, period):
    date = datetime.datetime.fromtimestamp(epoch / 1000 + period)
    hour = str(date.hour) if date.hour > 9 else '0' + str(date.hour)
    minute = str(date.minute) if date.minute > 9 else '0' + str(date.minute)
    second = str(date.second) if date.second > 9 else '0' + str(date.second)
    return epoch_to_string(epoch) + '-' + hour + '_' + minute + '_' + second
