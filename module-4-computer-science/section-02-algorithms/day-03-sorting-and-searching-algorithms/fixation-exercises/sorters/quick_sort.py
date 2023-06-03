def quicksort(array, low=0, high=None):
    if high is None:
        high = len(array) - 1

    if len(array) == 1:
        return array

    if low < high:
        partition_index = partition(array, low, high)
        quicksort(array, low, partition_index - 1)
        quicksort(array, partition_index + 1, high)


def partition(array, low, high):
    i = low - 1
    pivot = array[high]

    for j in range(low, high):
        if array[j] <= pivot:
            i = i + 1
            array[i], array[j] = array[j], array[i]
    array[i + 1], array[high] = array[high], array[i + 1]

    return i + 1


if __name__ == "__main__":
    array = [100, 4, 6, 33, 56, 67]
    quicksort(array)
    print(array)
