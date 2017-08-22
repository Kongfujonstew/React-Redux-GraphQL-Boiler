import Sequelize from 'sequelize';

var sequelize;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
    dialectOptions: {
      ssl: true
    }
  });
} else {
  sequelize = new Sequelize(
    'bollyphile1',
    'bollyphile', 
    'bollyphile', 
    {
      host: 'localhost',
      dialect: 'postgres',
    },
  );
}

const db = {
  Member: sequelize.import('./member'),
  Bolly: sequelize.import('./bolly'),
  Message: sequelize.import('./message')
};

db.sequelize = sequelize;

export default db;


// mutation CreateABolly ($input: BollyInput) {
//   createBolly(input: $input) {
//     id,
//     title,
//     youtubeURL,
//     streamTime
//   }
// }

// mutation CreateNewMember ($input: MemberInput) {
//   createMember (input: $input) {
//     id,
//     membername
//   }
// }

// {
//   "input": {
//       "memberId": 1,
//       "title": "funtitle",
//       "youTubeURL": 
//       "streamTime": "0"
//   }
// }

// # query Hello ($input: String!) {
// #   hello(input: $input)
// # }


// # mutation UpdateBollyTimeById ($input: BollyTimeUpdateInput) {
// #  updateBollyTimeById (input: $input) {
// #     id
// #   }
// # }


// # query RollDice($dice: Int!, $sides: Int) {
// #   rollDice(numDice: $dice, numSides: $sides)
// # }
  
// #   mutation {
// #   createMessage(input: {
// #     author: "andy",
// #     content: "hope is a good thing",
// #   }) {
// #     id
// #   }
// # }

// # mutation CreateNewMember ($input: MemberInput) {
// #   createMember (input: $input) {
// #     id
// #   }
// # }