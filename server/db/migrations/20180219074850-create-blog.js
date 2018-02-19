
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      blogId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false,
        unique: true
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      imgUrl: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM,
        values: ['draft', 'published', 'archived']
      },
      userId: {
        type: Sequelize.UUID,
        reference: {
          models: 'Users',
          key: 'userId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: queryInterface => queryInterface.dropTable('Blogs')
};