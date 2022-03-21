package code.startup.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Conta {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_conta;
	
	@Column(nullable = false, length = 60)
	private String banco_conta;
	
	@Column(nullable = false, length = 60)
	private String agencia_conta;
	
	@Column(nullable = false, length = 60)
	private String numero_conta;
	
	@JsonIgnore
	@OneToOne
	@JoinColumn(name = "id_funcionario", unique = true)
	private Funcionario funcionario;

	public Integer getId_conta() {
		return id_conta;
	}

	public void setId_conta(Integer id_conta) {
		this.id_conta = id_conta;
	}

	public String getBanco_conta() {
		return banco_conta;
	}

	public void setBanco_conta(String banco_conta) {
		this.banco_conta = banco_conta;
	}

	public String getAgencia_conta() {
		return agencia_conta;
	}

	public void setAgencia_conta(String agencia_conta) {
		this.agencia_conta = agencia_conta;
	}

	public String getNumero_conta() {
		return numero_conta;
	}

	public void setNumero_conta(String numero_conta) {
		this.numero_conta = numero_conta;
	}

	public Funcionario getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}
	
}
