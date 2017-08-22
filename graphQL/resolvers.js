export default {
  Query: {
    hello: (p, { input }, context) => input,
    loginMember: (p, { input }, { models }) => 
      models.Member.findOne({
        where: {
          membername: input.membername,
          memberpassword: input.memberpassword,
        },
      }),

    getMemberByName: (p, { membername }, { models }) => 
      models.Member.findOne({
        where: {
          membername: membername
        },
      }),
      
    getMemberById: (p, { id }, { models }) =>
      models.Member.findOne({
        where: {
          id: id
        }
      }),
    
    getMembersByBollyId: (p, { bollyid }, { models }) =>
      models.Member.findAll({
        where: {
          bollyid,
        }
      }),

    allMembers: (p, a, { models }) => models.Member.findAll(),
    allBollies: (p, a, { models }) => models.Bolly.findAll(),
    getMessagesByBollyId: (p, { bollyid }, { models }) =>
      models.Message.findAll({
        where: {
          bollyid: bollyid
        }
      }),

    allMessages: (p, a, { models}) => models.Message.findAll(),

  },

  Mutation: {
    createMember: (p, { input }, { models }) => models.Member.create(input),
    findOrCreateMember: (p, a, { models }) => models.Member.findOrCreate(a),
    joinBolly: (p, { memberid, bollyid }, { models }) => {
      models.Member.findOne({
        where: {
          memberid: memberid
        }
      }).then(member => member.updateAttributes({
        // where: {
          bollyid: bollyid
        // }
      }))
    },

    deleteMemberById: (p, { id }, { models }) => 
      models.Member.destroy({
        where: {
          id: id
      }}),

    createBolly: (p, { input }, { models }) => models.Bolly.create(input),
    updateBollyTimeById: (p, { id, streamtime }, { models }) =>
      models.bollyid.findOne({
        where: {
          id: 1
        }
      }).then((bollyid) => {
        bollyid.update({
          streamTime: streamtime
        })
      }),


    createMessage: (p, { input }, { models }) => models.Message.create(input),

    deleteMessageById: (p, { id }, { models }) => 
      models.Message.destroy({ 
        where: {
          id: id
      }}),

    deleteAllMessagesByMemberId: (p, { memberid }, { models }) => 
      models.Message.findAll({
        where: {
          memberid,
        }
      }).then((members) => {
        members.forEach((member) => {
          member.destroy();
        })
      })

  },
};


