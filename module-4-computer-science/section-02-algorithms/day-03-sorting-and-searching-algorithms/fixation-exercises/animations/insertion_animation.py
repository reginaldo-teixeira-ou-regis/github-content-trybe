import pygame
from pygame.locals import *
from helper.params import *
from helper.generate_array import generatearray

pygame.display.set_caption("Insertion Sort")


class sort:
    def __init__(self, arr):
        self.arr = arr
        self.n = len(arr)
        self.i = 2
        self.image = pygame.Surface((width - width / 5, height - height / 5))
        self.rect = self.image.get_rect()
        self.rect.left = width / 10
        self.rect.top = height / 10
        self.width_per_bar = self.rect.width / self.n - 2

    def update(self):
        if self.i < self.n:
            self.image.fill(black)
            #################Sorting Algorithm here#############################
            for j in range(self.i, 0, -1):
                if self.arr[j] < self.arr[j - 1]:
                    self.arr[j], self.arr[j - 1] = self.arr[j - 1], self.arr[j]
            self.i += 1
            ####################################################################
            l = 0
            for k in range(0, int(self.rect.width), int(self.width_per_bar + 2)):
                bar = pygame.Surface((self.width_per_bar, self.arr[l]))
                bar_rect = bar.get_rect()
                bar.fill(white)
                bar_rect.bottom = self.rect.height
                bar_rect.left = k

                self.image.blit(bar, bar_rect)
                l += 1

        else:
            pass

    def draw(self):
        screen.blit(self.image, self.rect)


def main():
    arr = generatearray(120)
    insertion_sort = sort(arr)
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                quit()
        insertion_sort.update()
        screen.fill(black)
        print(insertion_sort.arr)
        insertion_sort.draw()
        pygame.display.update()
        clock.tick(FPS)


main()
