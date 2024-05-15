## Checkpoint 1
## Processor Initialization

### GDT (Global Descriptor Table)


### IDT (Interrupt Descriptor Table)
IDT contains entries for exceptions, interrupts, and system calls. In IA-32 architecture, IDT has a total of 256 entries (range 0 to 255). 

Each exception, interrupt, and system call has a corresponding vector number (basically an index of the table) and a handler. 

The vectors 0 to 31 are reserved by the IA-32 architecture for architecture-defined exceptions and interrupts.

Exceptions are stored in the first 20 entries.

System call is stored at 0x80 (in hexadecimal).

User-defined interrupts are stored in the range 32 to 255 (in decimal).

### Paging
Paging provides virtual memory abstraction that allows processes to operate as if they have access to a larger memory space than physical memory.

Some terms for paging:
- PDE (Page Directory Entry): a table that contains pointers to PTE. 

- PTE (Page Table Entry): a table that contain pointers to physical memory.


For paging, this project uses 4kB page and 4MB page.

-   For 4kB page: 
    
    The paging scheme is divided into three parts: PDE, PTE, physical memory.

    Convertion order: PDE -> PTE -> Physical memory
    
    32 bit virtual address layout:

    |  PDE      |  PTE    | Physical memory offset |
    | :-----:   | :-----: |   :-----:              |
    |  10 bits  | 10 bits | 12 bits                |


-   For 4MB page:
    
    The paging scheme is divied into two parts: PDE, physical memory.
    
    Convertion order: PDE -> Physical memory

### Incomplete Device Driver

- PIC (Programmable Interrupt Controller): 
    
    The PIC used is 8259 PIC, one of most important chip in this architecture. Its main purpose is to manage hardware interrupt and send the hardware interrrupts to the proper system interrupt. A PIC chip has 8 IRQs to the system. IRQ numbers determines the priority of the interrupt. The lower the IRQ number, the higher the priority.
    
    This project use one master PIC and one slave PIC to manange the device interrupts. The slave PIC is connected to IRQ 2.
    
    In this checkpoint, the keyboard and RTC interrupts are connected to IRQ 1 and IRQ 8
    
    More information about initializing PIC, adding hardware interrupts, master PIC and slave PIC communication... can be found on OSDev and documentations provided on ECE 391 course website.

- Keyboard: this checkpoint only requires keypress to be shown on the screen.

- RTC (Real Time Clock): this checkpoint only initializes RTC but does not have any usage.