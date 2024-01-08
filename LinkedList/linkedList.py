class Node:
    def __init__(self, data):
        self.data = data
        self.next = None   

class LinkList:
    def __init__(self, data):
        self.head = Node(data)
        self.tail = self.head
        self.length = 1
        
        
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
        
        
        
def main():
    myList = LinkList(5)
    myList.append(10)
    myList.append(15)
    myList.prepend(8)
    print(myList.printList())

if __name__== '__main__':
    main()