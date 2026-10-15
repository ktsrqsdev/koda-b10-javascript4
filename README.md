# MAX
``` mermaid
flowchart LR
    start((START))
    stop(((STOP)))

    angka["angka = [number]"]
    max["max = angka[0]"]
    I[i = 0]
    reassign["max = angka[i]"]
    loop[i++]
    output[/max/]
    
    konI{i < angka.length}
    cekmax{"angka[i] > max"}


    start --> angka
    angka --> max
    max --> I
    I --> konI
    konI --TRUE--> cekmax
    cekmax --FALSE--> loop
    cekmax --TRUE--> reassign
    reassign --> loop
    loop --> konI
    konI --FALSE--> output
    output --> stop
```
```
Output : 50
```
# MIN
``` mermaid
flowchart LR
    start((START))
    stop(((STOP)))


    angka["angka = [number]"]
    min["min = angka[0]"]
    I[i = 0]
    reassign["min = angka[i]"]
    loop[i++]
    output[/min/]
    
    konI{i < angka.length}
    cekmin{"angka[i] < min"}




    start --> angka
    angka --> min
    min --> I
    I --> konI
    konI --TRUE--> cekmin
    cekmin --FALSE--> loop
    cekmin --TRUE--> reassign
    reassign --> loop
    loop --> konI
    konI --FALSE--> output
    output --> stop
```
```
Output : 10
```

# AVERAGE
``` mermaid
flowchart LR
    start((START))
    stop(((STOP)))

    konI{i < angka.length}

    angka["angka = [number]"]
    total[total = 0]
    addTotal["total += angka[i]"]
    average[average = total / angka.length]
    output[average]
    loop[i++]


    start --> angka
    angka --> total
    total --> konI
    konI --TRUE--> addTotal
    addTotal --> loop
    loop --> konI
    konI --FALSE--> average
    average --> output
    output --> stop

```
```
Output : 30
```
