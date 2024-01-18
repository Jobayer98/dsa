nums_list = [5,8,6,1,7,9]
length = len(nums_list)

for i in range(0, length):
    flag = 0
    for j in range(0, length-1-i):
        if (nums_list[j] > nums_list[j+1]):
            temp = nums_list[j]
            nums_list[j] = nums_list[j+1]
            nums_list[j+1] = temp
            flag = 1
    if flag == 0:
        break

for num in nums_list:
    print(num)