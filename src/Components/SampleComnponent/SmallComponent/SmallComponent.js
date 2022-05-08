function SmallComponent ({ todoList }) {
  return (
    <ul>
      {todoList.map(ele => <li>{ele}</li> )}
    </ul>
  )
}

export default SmallComponent;