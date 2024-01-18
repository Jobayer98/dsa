nums_list = [5,8,6,1,7,9]
length = len(nums_list)

for i in range(0, length):
    for j in range(i+1, length):
        if (nums_list[i] > nums_list[j]):
            temp = nums_list[i]
            nums_list[i] = nums_list[j]
            nums_list[j] = temp

for num in nums_list:
    print(num)