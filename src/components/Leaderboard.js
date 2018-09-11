import React from 'react'
import { connect } from 'react-redux'

function Leaderboard ({ users }) {
  console.log('Look here numbskull', users)
  return (
    <ul>
      {users.map((user) => (
        <li className='user' key={user.id}>
          <img src={user.avatarURL} alt={`Avatar for ${user.name}`}/>.
          <div>
            <h1>{user.name}</h1>
            <p>{user.polls} Polls</p>
            <p>{user.answers} Answers</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

//do all of the heavy lifting here so that the React component can just do REACT stuff (less computational stuff)
function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
      .map((id) => {
        const { name, avatarURL, polls, answers } = users[id]
        
        return {
          id,
          name,
          avatarURL, 
          polls: polls.length,
          answers: answers.length,
        }
      })
      .sort((a,b) => b.answers + b.polls > a.answers + a.polls)
  }
}

export default connect(mapStateToProps)(Leaderboard)