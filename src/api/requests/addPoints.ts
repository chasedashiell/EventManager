import { mutate } from 'swr';
import http from '../http';
import Group from '../models/Group';
import Event from '../models/Event';

export default async (groupIndex: Group['index'], amount: Event['points']) => {
  try {
    await http.post('/leaderboard', { groupIndex, amount });
    mutate('/leaderboard');
  } catch (err) {
    return console.log(err);
  }
}