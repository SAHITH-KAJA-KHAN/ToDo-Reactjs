function List(){
  const fruits =[{ id:1,name:"Fruits",cal:45},
                   {id:2,name:"Fruits",cal:45},
                     {id:3,name:"dsf",cal:45},
                        {id:4,name:"Fruits",cal:45},
                           {id:5,name:"Fruaaaaits",cal:45}];
  const listitems = fruits.map(fruit=> <li key={fruit.id}>{fruit.name}:&nbsp;{fruit.cal}</li>)
  return(<ol>{listitems}</ol>);
}
export default List
