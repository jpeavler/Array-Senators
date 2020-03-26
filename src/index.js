import Senators from './data/senators'



export const republicans = () => {
  return Senators.filter((sen) => {
    return sen.party == 'Republican';
  })
}

export const democrats = () => {
  return Senators.filter((sen) => {
    return sen.party == 'Democrat';
  })
}

export const independents = () => {
  return Senators.filter((sen) => {
    return sen.party == 'Independent';
  })
}

export const males = () => {
  return Senators.filter((sen) => {
    return sen.person.gender == "male";
  })
}

export const females = () => {
  return Senators.filter((sen) => {
    return sen.person.gender == "female";
  })
}

export const byState = (state = 'UT') => {
  return Senators.filter((sen) => {
    return sen.state == state;
  }) 
}

export const mapping = () => {
  return Senators.map(sen => {
    return { firstName: sen.person.firstname, lastName: sen.person.lastname, party: sen.party, gender: sen.person.gender}
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
