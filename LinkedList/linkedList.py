import math
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None   

class LinkList:
    def __init__(self, data):
        self.head = Node(data)
        self.tail = self.head
        self.length = 1
        
    def __str__(self):
        return f"{self.head.data}"
        
        
    def append(self, data):
        new_node = Node(data)
        self.tail.next = new_node
        self.tail = new_node
        self.length += 1
        
    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        self.length += 1
        
    def printList(self):
        current_node = self.head
        list_value = []
        while current_node is not None:
            list_value.append(current_node.data)
            current_node = current_node.next
            
        return list_value

    def reverse(self):
        p = self.head
        q = None
        r = None
        while p != None:
          r = q
          q = p
          p = p.next
          q.next = r
          
        self.head = q
        
    def getDecimalValue(self):
        current_node = self.head
        b_str = ""
        dec_v = 0
        while current_node is not None:
            b_str = str(current_node.data) + b_str
            current_node = current_node.next
        b_list = list(b_str)
        
        for i in range(len(b_list)):
            if b_list[i] != '0':
                dec_v += pow(2, i)
                
        return dec_v
    
    def middleNode(self):
        length = 0
        current_pointer = self.head
        while current_pointer:
            length += 1
            current_pointer = current_pointer.next
        
        current_pointer = self.head
        for i in range(math.floor(length/2)):
            current_pointer = current_pointer.next

        self.head = current_pointer 

    def countNode (self):
        c = 0
        current_node = self.head
        while(current_node != None):
            c += 1
            current_node = current_node.next
        return c;
    
    def sumOfNode(self):
        current_node = self.head
        sum = 0
        while(current_node != None):
            sum += current_node.data
            current_node = current_node.next
        return sum
      
    def removeDuplicates(self):
        current_node = self.head
        while current_node.next != None:
            if (current_node.data == current_node.next.data):
                current_node.next = current_node.next.next
            else:
                current_node = current_node.next
  
def main():
    myList = LinkList(1)
    myList.append(1)
    myList.append(2)
    # myList.append(3)
    # myList.append(3)
    myList.removeDuplicates()
    
    print(myList.printList())
    # myList.middleNode() 
    # myList.reverse()
    # print(myList.printList())
    # print(myList.countNode())
    # print(myList.sumOfNode())

if __name__== '__main__':
    main()