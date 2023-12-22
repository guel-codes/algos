const list1 = [0,1,2,3,4,"hello"]
    /* 
        This is usually called an array but for now let's think of this a just a list of elements
        The reason this is not an array is because you can mix data types with in, ex. the "hello" as the last element of this array
        If I were to do this with any of the int arrays below it wouldn't work because they will only except integers

    */
const array1 = new Uint8Array(10)
const arrayBuffer = new ArrayBuffer(8)
    /*
        ArrayBuffer will create an array of zeroes with a total byteLength of 8.
        Now we need to interpret this ArrayBuffer by passing it into a Uint8array, Uint16Array or Uint32Array
    */


const array8 = new Uint8Array(arrayBuffer) 
    /**
        This breaks our buffer into 8 (8)byte sections with each section, with index starting at 0
        00 | 00 | 00 | 00 | 00 | 00 | 00 | 00
     */
const array16 = new Uint16Array(arrayBuffer)
    /**
        This breaks our buffer into 4 (16)byte sections, with index starting at 0
         00  00 | 00  00 | 00  00 | 00  00
     */
const array32 = new Uint32Array(arrayBuffer)  
    /**
        This breaks our buffer into 2 (32)byte sections, with index starting at 0
         00  00  00  00 | 00  00  00  00
     */


// Now let's access some of the elements within these arrays
array8[0] = 5
array16[0] = 5
array32[0] = 5

         // view the arrays

console.log(list1)
console.log(array1)
console.log(arrayBuffer)

console.log(array8)
console.log(array16)
console.log(array32)
