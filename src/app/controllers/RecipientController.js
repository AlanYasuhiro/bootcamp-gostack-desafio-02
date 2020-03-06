import * as Yup from 'yup';

import Recipient from '../models/Recipient';
class RecipientController {
  async store(req, res){
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.string().required(),
      complemento: Yup.string().required(),
      estado: Yup.string().required(),
      cep: Yup.number().min(8).required(),
      cidade: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Validations fail'});
    }
    const nameExists = await Recipient.findOne({where: {nome: req.body.nome}});
    if(nameExists){
      return res.status(400).json({error: 'Recipient already exist'});
    }

    const {id, nome, rua, numero, complemento, estado, cep, cidade} = await Recipient.create(req.body);

    return res.json({
      id, 
      nome, 
      rua,
      numero, 
      complemento, 
      estado,
      cep,
      cidade,
    });
  }

  async update(req, res){
    
    const {id} = req.params;
    console.log(id);

    const recipient = await Recipient.findByPk(id);

    if(!recipient) {
      return res.status(401).json({error: 'Recipient does not exists'});
    }

    const {nome, rua, numero, complemento, estado, cep, cidade} = await recipient.update(req.body);

    return res.json({
      id, 
      nome,
      rua,
      numero,
      complemento,
      estado,
      cep,
      cidade,
    });  
  }
}

export default new RecipientController();