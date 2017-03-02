import React, { Component } from 'react'
// import { Link } from 'react-router'
import axios from 'axios'
import './group-page.css'

class GroupPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      restaurants: []
    }

    this.getRestaurants = this.getRestaurants.bind(this)
    this.getVotes = this.getVotes.bind(this)
    this.createRanking = this.createRanking.bind(this)
    this.addRestaurantsVotes = this.addRestaurantsVotes.bind(this)
  }

  getRestaurants () {
    axios.get(`/restaurants/${this.props.group.id}`)
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.log('it failed', err)
      })
  }

  getVotes () {
    axios.get(`/votes/${this.props.group.id}`)
      .then((res) => {
        console.log(res.data.rows)
        return res.data.rows
      })
      .catch((err) => {
        console.log('it failed', err)
      })
  }

  createRanking (votes) {
    const ranking = []
    for (const vote of votes) {
      if ((vote.total_votes / this.props.group.people.length) > 0.6) {
        vote.percent = (vote.yes_votes / vote.total_votes)
        ranking.push(vote)
      }
    }
    ranking.sort(function (a, b) {
      return b - a
    })
    return ranking
  }

  addRestaurantsVotes (rankings, restaurants) {
    restaurants.filter((restaurant) => {
      for (const ranking of rankings) {
        if (ranking.restaurant_id === restaurant.id) {
          restaurant.vote = ranking
          return (true)
        }
      }
      return (false)
    })
    return restaurants
  }

  componentDidMount () {
    const votes = this.getVotes()
    const restaurants = this.getRestaurants()
    const ranking = this.createRanking(votes)
    const rankedRestaurants = this.addRestaurantsVotes(ranking, restaurants)
  }

  render () {
    return (
      <div className='group-page'>
        <div className='group-page-name'>{this.props.group.name}</div>
        <div className='group-page-people'>
          {this.props.group.people.map((person) => {
            return (
              <div key={person.id} className='group-page-person'>
                <img src={person.profile_photo_url} className='group-page-img' alt='img' />
                <div>{person.first_name}</div>
              </div>
            )
          })}
        </div>
        <div className='group-page-results'>
          <div className='group-page-places'>
            {this.state.restaurants.map((restaurant) => {
              return (
                <div key={restaurant.id} className='group-page-place'>{restaurant.name}</div>
              )
            })}
          </div>
          <div className='group-page-map'>Map</div>
        </div>
      </div>
    )
  }
}

module.exports = GroupPage
