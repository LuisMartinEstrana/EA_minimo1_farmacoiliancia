import { Request, Response } from 'express';

//Models
import Farmaco, { IFarmaco } from '../models/farmaco';

export async function getFarmaco(req: Request, res: Response): Promise<Response> {
    const farmaco = await Farmaco.find();
    return res.json(farmaco);
}

export async function createFarmaco(req: Request, res: Response): Promise<Response> {
    const { unidad, descripcion, telefono } = req.body;
    const newFarmaco = { unidad, descripcion, telefono };
    const farmaco = new Farmaco(newFarmaco);
    await farmaco.save();
    return res.json({ message: 'Farmaco añadido'});
}

export async function deleteFarmaco(req:Request, res: Response): Promise<Response> {
    const{ id } = req.params;
    const farmaco = await Farmaco.findByIdAndRemove(id) as IFarmaco;
    return res.json({ message: 'Farmaco Eliminado'});
}