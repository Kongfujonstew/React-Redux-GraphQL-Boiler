export default `

  input MemberInput {
    membername: String
    memberpassword: String
  }

  input BollyInput {
    memberid: Int
    title: String
    youtubeurl: String
    streamtime: String
    jsondata: String
  }

  input MessageInput {
    memberid: Int!
    text: String!
    bollyid: Int!
  }

  input BollyTimeUpdateInput {
    id: Int!
    streamtime: String!
  }

  type Member {
    id: Int!
    membername: String!
    memberpassword: String!
    bollyid: Int!
  }

  type Bolly {
    id: Int
    memberid: Int
    title: String
    youtubeurl: String
    streamtime: String
    jsondata: String
  }

  type Message {
    id: Int!
    time: String!
    memberid: Int!
    text: String!
    bollyid: String!
  }

  type Query {
    hello(input: String!): String!
    loginMember(input: MemberInput): Member
    getMemberByName(membername: String!): Member
    getMemberById(id: Int!): Member
    getMembersByBollyId(bollyid: Int!): [Member]
    allMembers: [Member]
    allBollies: [Bolly!]!
    getMessagesByBollyId(bollyid: Int!): [Message]
    allMessages: [Message!]!
  }

  type Mutation {
    createMember(input: MemberInput): Member
    findOrCreateMember(membername: String!): Member
    createBolly(input: BollyInput): Bolly
    createMessage(input: MessageInput): Message
    joinBolly(memberid: Int, bollyid: Int): Int
    deleteMemberById(id: Int!): Int!

    createMessage(input: MessageInput): Message
    deleteMessageById(id: Int!): Message
    deleteAllMessagesByMemberId(id: Int!): [Message]

    updateBollyTimeById(input: BollyTimeUpdateInput): Bolly
  }
`;
