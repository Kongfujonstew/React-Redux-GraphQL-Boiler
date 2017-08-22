query Greeting ($input: String!) {
    hello(input: $input)
}

{
  "input":"holla"
}






query LoginMember ($input: MemberInput) {
  loginMember (input: $input) {
    id,
    membername
  }
}

(GETALLMEMBERS)


query GetMemberByName ($membername: String!) {
  getMemberByName (membername: $membername) {
    id,
    membername
  }
}


{
  "memberame":"fake"
}

query GetMemberByID ($input: Int!) {
  getMemberById (id: $input) {
    id,
    membername
  }
}

{
  "input":1
}



{
  "memberid":2,
  "bollyidid": 2
}


query GetMembersByBollyId ($bollyid: Int!) {
  getMembersByBollyId (bollyid: $bollyid) {
    id,
    membername
  }
}

{
  "bollyid": 4
}

query GetMessagesByBollyId ($bollyid: Int!) {
  getMessagesByBollyId (bollyid: $bollyid) {
    id,
    time,
    memberid,
    text
  }
}

{
  "bollyid": 4
}

query AllBollies {
  allBollies {
    id,
    title,
    youtubeurl,
    streamtime,
    jsondata
  }
}



MUTATIONS


mutation CreateNewMember ($input: MemberInput) {
  createMember (input: $input) {
    id,
    membername
  }
}

{
  "input": {
      "membername": "fake",
      "memberpassword": "fake"
  }
}


mutation CreateNewBolly ($input: BollyInput) {
  createBolly (input: $input) {

  }
}

{
  "input": {
    "memberid": 2,
    "title": "hello",
    "youtubeurl":"www.medicine.com",
    "streamtime": "3:40",
    "jsondata": "{}"
  }
}



mutation CreateNewMessage ($input: MessageInput) {
  createMessage (input: $input) {
    id
  }
}

{
  "input": {
      "memberid": 4,
      "text": "atext",
      "bollyid": 1
  }
}


mutation joinBollyById ($memberid: Int, $bollyid: Int) {
  joinBolly (memberid: $memberid, bollyid: $bollyid) {
    id,
  }
}

{
  "input": {
      "memberid": 4,
      "title": "abolly",
      "youtubeurl": "www.whenev.com",
      "streamtime": "3:40",
      "jsondata": "{}"
  }
}


mutation DeleteMessageById ($id: Int!) {
  deleteMessageById(id: $id) {
    id
  }
}

{
  "id": 3

}


mutation DeleteMessagesByMemberId ($id: Int!) {
  deleteAllMessagesByMemberId(id: $id) {
    id
  } 
}

{
  "id": 3

}

