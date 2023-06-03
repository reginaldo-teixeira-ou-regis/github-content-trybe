import pygame
from pygame.locals import *

from helper.generate_array import generatearray
from helper.params import *

pygame.display.set_caption("Merge Sort")


def mergesort(arr, temparr, left, right):
    if left < right:
        mid = int((left + right) / 2)
        mergesort(arr, temparr, left, mid)
        mergesort(arr, temparr, mid + 1, right)
        merge(arr, temparr, left, mid + 1, right)

    else:
        pass


def merge(arr, temp, left, mid, right):
    left_end = mid - 1
    temp_pos = left
    size = right - left + 1

    while left <= left_end and mid <= right:
        if arr[left] <= arr[mid]:
            temp[temp_pos] = arr[left]
            temp_pos = temp_pos + 1
            left = left + 1
        else:
            temp[temp_pos] = arr[mid]
            temp_pos = temp_pos + 1
            mid = mid + 1

    while left <= left_end:
        temp[temp_pos] = arr[left]
        left = left + 1
        temp_pos = temp_pos + 1

    while mid <= right:
        temp[temp_pos] = arr[mid]
        mid = mid + 1
        temp_pos = temp_pos + 1

    for i in range(0, size):
        arr[right] = temp[right]
        right = right - 1
        displayarray(arr)


def displayarray(arr):
    image = pygame.Surface((width - width / 5, height - height / 5))
    rect = image.get_rect()
    rect.top = height / 10
    rect.left = width / 10
    width_per_bar = rect.width / len(arr) - 2

    l = 0
    for k in range(0, int(rect.width), int(width_per_bar + 2)):
        bar = pygame.Surface((width_per_bar, arr[l]))
        bar_rect = bar.get_rect()
        bar.fill(white)
        bar_rect.bottom = rect.height
        bar_rect.left = k

        image.blit(bar, bar_rect)
        l += 1

    screen.fill(black)
    screen.blit(image, rect)
    pygame.display.update()
    clock.tick(FPS)


def main():
    arr = generatearray(120)
    temparr = [0] * len(arr)
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                quit()

        if sorted(arr) != arr:
            mergesort(arr, temparr, 0, len(arr) - 1)
        else:
            displayarray(arr)


main()
