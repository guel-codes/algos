const list1 = [0,1,2,3,4,"hello"]
    /* 
        This is usually called an array but for now let's think of this a just a list of elements
        The reason this is not an array is because you can mix data types with in, ex. the "hello" as the last element of this array
        If I were to do this with any of the int arrays below it wouldn't work because they will only except integers

    */
const array1 = new Uint8Array(10)
const arrayBuffer = new ArrayBuffer(8)
    /*
        ArrayBuffer will create an array of zeroes with a total byteLength of 8. It is a contiguous piece of memory the arrays below allow you to create a view into that piece of memor
        Now we need to interpret this ArrayBuffer by passing it into a Uint8array, Uint16Array or Uint32Array
    */


const array8 = new Uint8Array(arrayBuffer) 
    /**
        This creates a 8 byte buffer, with an int8 view of the buffer. this breaks the buffer into 8 bit units
        0 , 0 , 0 , 0 , 0 , 0 , 0 , 0
     */
const array16 = new Uint16Array(arrayBuffer)
    /**
        This creates a 8 byte buffer, with an int16 view of the buffer, this breaks the buffer into 16 bit units
         0 , 0 , 0 , 0
     */
const array32 = new Uint32Array(arrayBuffer)  
    /**
        This creates a 8 byte buffer, with an int32 view of the buffer, this breaks the buffer into 32 bit units
         0 , 0
     */


// Now let's access some of the elements within these arrays
array8[0] = 5 // these assignments can be decimal or hexidecimcal values
array16[0] = 5
array32[0] = 5

         // view the arrays

console.log(list1)
console.log(array1)
console.log(arrayBuffer)

console.log(array8)
console.log(array16)
console.log(array32)
