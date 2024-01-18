nums_list = [5,8,6,1,7,9]
length = len(nums_list)

for i in range(0, length):
    j = i - 1
    temp = nums_list[i]
    while (j >= 0 and nums_list[j] > temp):
        nums_list[j+1] = nums_list[j]
        j -= 1
    nums_list[j+1] = temp

for num in nums_list:
    print(num)