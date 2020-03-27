import Senators from './data/senators'

const filterByParty = (party) =>{
  return Senators.filter((sen) => {
    return sen.party == party;
  })
}

export const republicans = () => {
  return filterByParty("Republican");
}

export const democrats = () => {
  return filterByParty("Democrat");
}

export const independents = () => {
  return filterByParty("Independent");
}

const filterByGender = (gender) =>{
  return Senators.filter((sen) => {
    return sen.person.gender == gender;
  })
}
export const males = () => {
  return filterByGender("male");
}

export const females = () => {
  return filterByGender("female");
}

export const byState = (state = 'UT') => {
  return Senators.filter((sen) => {
    return sen.state == state;
  }) 
}

export const mapping = () => {
  return Senators.map(sen => {
    return { 
      firstName: sen.person.firstname, 
      lastName: sen.person.lastname, 
      party: sen.party, 
      gender: sen.person.gender
    }
  })
}

let par;
export const reducedCount = () => {
  return Senators.reduce( function(tally,sen) {
    par = sen.party.toLowerCase()
    tally[par] = (tally[par] || 0) + 1;
    return tally;
  }, {})
}


const REPLACE_ME_WITH_CODE = false
