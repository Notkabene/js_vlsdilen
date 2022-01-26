const users = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 10
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }
]

const onlineUsers = users.filter(item => item.status === 'online')
let usersOnlineNames = []
for (let i = 0; i < onlineUsers.length; i++) {
  usersOnlineNames.push(onlineUsers[i].username)
}

usersOnlineNames = usersOnlineNames.join(', ')

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)
