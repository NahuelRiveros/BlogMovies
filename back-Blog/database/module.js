export const tbPersona = db.define(
    "Persona",
    {
        id_Persona: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Segundo_Nombre: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Apellido: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Genero: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fk_id_Usuario: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "Usuario",
                key: "id_Usuario",
            },
        },
    },
    { freezeTableName: true }
);
export const tbUsuario = db.define(
    "Usuario",
    {
        id_Usuario: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            unique: true,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }})