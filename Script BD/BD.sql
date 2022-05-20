create database SistemaOptima;

use SistemaOptima;

create table tb_funcionario(
    id_funcionario    int primary key auto_increment,
    ds_funcionario    varchar(14),
    ds_senha          varchar(14)
);

insert into tb_funcionario (ds_funcionario,ds_senha)
	   values ('admin','admin');

select * from tb_funcionario;

select * from tb_cliente;

create table tb_cadastro_veiculo(
    id_cadastro_veiculo  int primary key auto_increment,
    ds_modelo            varchar(50),
    ds_marca             varchar(50),
    vl_valor             decimal(15,2),
    ds_placa 	 	 varchar(7),
    dt_anofab     	 year,
    vl_km      	         decimal(15,2),
    nr_codigo            int,
    ds_classe 		 varchar(15),
    img_veiculo          blob
);

select * from tb_cadastro_veiculo;

insert into tb_cadastro_veiculo (ds_modelo, ds_marca, vl_valor, ds_placa, dt_anofab, vl_km, nr_codigo, ds_classe)
	values ('IX-35', 'Hyundai', '64999.99', 'DRK0123', '2021', '90.000', '00000', 'Suv');
    
insert into tb_cadastro_veiculo (ds_modelo, ds_marca, vl_valor, ds_placa, dt_anofab, vl_km, nr_codigo, ds_classe)
	values ('HR-V', 'Honda', '120000.00', 'DVL0673', '2017', '290.000', '00000', 'Suv');
    
insert into tb_cadastro_veiculo (ds_modelo, ds_marca, vl_valor, ds_placa, dt_anofab, vl_km, nr_codigo, ds_classe)
	values ('Civic', 'Honda', '92999.00', 'DOC9234', '2021', '120.000', '00000', 'Esportivo');
    
insert into tb_cadastro_veiculo (ds_modelo, ds_marca, vl_valor, ds_placa, dt_anofab, vl_km, nr_codigo, ds_classe)
	values ('Onix', 'Chevrolet', '54999.00', 'HJL9234', '2019', '170.000', '00000', 'Compacto');
    
insert into tb_cadastro_veiculo (ds_modelo, ds_marca, vl_valor, ds_placa, dt_anofab, vl_km, nr_codigo, ds_classe)
	values ('Compass', 'JEEP', '13999.00', 'HNH9234', '2017', '70.000', '00000', 'Suv');
    
insert into tb_cadastro_veiculo (ds_modelo, ds_marca, vl_valor, ds_placa, dt_anofab, vl_km, nr_codigo, ds_classe)
	values ('Cronos', 'Fiat', '89999.99', 'IGN1754', '2021', '30.000', '00000', 'Sedan');
    
insert into tb_cadastro_veiculo (ds_modelo, ds_marca, vl_valor, ds_placa, dt_anofab, vl_km, nr_codigo, ds_classe)
	values ('Jetta', 'Volkswagen', '78999.99', 'KFR2956', '2019', '70.000', '00000', 'Sedan');
    
insert into tb_cadastro_veiculo (ds_modelo, ds_marca, vl_valor, ds_placa, dt_anofab, vl_km, nr_codigo, ds_classe)
	values ('Argo', 'Fiat', '67999.99', 'DWC9256', '2020', '90.000', '00000', 'Compacto');
    
insert into tb_cadastro_veiculo (ds_modelo, ds_marca, vl_valor, ds_placa, dt_anofab, vl_km, nr_codigo, ds_classe)
	values ('Corolla', 'Toyota', '72999.99', 'DGB2398', '2021', '115.000', '00000', 'Sedan');
    
insert into tb_cadastro_veiculo (ds_modelo, ds_marca, vl_valor, ds_placa, dt_anofab, vl_km, nr_codigo, ds_classe)
	values ('Ká', 'Ford', '52999.99', 'TRA6726', '2020', '160.000', '00000', 'Compacto');
    
insert into tb_cadastro_veiculo (ds_modelo, ds_marca, vl_valor, ds_placa, dt_anofab, vl_km, nr_codigo, ds_classe)
	values ('Polo', 'Volkswagen', '64999.99', 'GDG9567', '2021', '90.000', '00000', 'Compacto');
  
insert into tb_cadastro_veiculo (ds_modelo, ds_marca, vl_valor, ds_placa, dt_anofab, vl_km, nr_codigo, ds_classe)
	values ('CRV', 'Honda', '84999.99', 'KGB2116', '2016', '220.000', '00000', 'Suv');  
