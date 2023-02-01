let table: number[][] = [];

let row1: number[] = [1]
for (let i: number = 0; i < 16; i++) {
    row1.push(0);
}
row1.push(2);

table.push(row1);

let row2: number[] = [3, 4];
for (let i: number = 0; i < 10; i++) {
    row2.push(0);
}
row2.push(5,6,7,8,9,10);

table.push(row2);

let row3: number[] = [11, 12];
for (let i: number = 0; i < 10; i++) {
    row3.push(0);
}
row3.push(13, 14, 15, 16, 17, 18);
table.push(row3);

let row4: number[] = [];
for (let i: number = 19; i < 37; i++) {
    row4.push(i);
}

table.push(row4);

let row5: number[] = [];
for (let i: number = 37; i < 55; i++) {
    row5.push(i);
}

table.push(row5);

let row6: number[] = [55, 56, 0];
for (let i: number = 72; i < 87; i++) {
    row6.push(i);
}
table.push(row6);

let row7: number[] = [87, 88, 0];
for (let i: number = 104; i < 119; i++) {
    row7.push(i);
}
table.push(row7);

table.push([]);

let row8: number[] = [0,0,0];
for (let i: number = 57; i < 72; i++) {
    row8.push(i);
}
table.push(row8);

let row9: number[] = [0,0,0];
for (let i: number = 89; i < 104; i++) {
    row9.push(i);
}
table.push(row9);

export default table;