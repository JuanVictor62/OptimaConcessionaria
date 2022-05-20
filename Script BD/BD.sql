create database SistemaOptima;

use SistemaOptima;

create table tb_funcionario(
    id_funcionario    int primary key auto_increment,
    ds_funcionario  varchar(14),
    ds_senha        varchar(14)
);

insert into tb_funcionario (ds_funcionario,ds_senha)
	   values ('admin','admin');

select * from tb_funcionario;

create table tb_cliente(
    id_cliente        int primary key auto_increment,
    id_cadastro_veiculo		int,
    nm_cliente        varchar(100),
    nr_cpf            int,
    nr_cnh            int,
    nr_rg             int,
    ds_nascimento     date,
    ds_telefone       varchar(50),
    foreign key (id_cadastro_veiculo) references tb_cadastro_veiculo(id_cadastro_veiculo)
);

select * from tb_cliente;

create table tb_cadastro_veiculo(
    id_cadastro_veiculo  int primary key auto_increment,
    ds_modelo            varchar(50),
    ds_marca             varchar(50),
    nr_valor             double,
    dt_anofabricacao     date,
    ds_quilometragem     double,
    nr_codigo            int,
    img_veiculo          blob
);

select * from tb_cadastro_veiculo;