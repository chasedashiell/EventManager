import { mutate } from 'swr';
import http from '../helpers/http';
import Group from '../models/Group';
import Event from '../models/Event';

export default async (grade: Group['grade'], points: Event['points']) => {
  try {
    await http.post('/leaderboard', { grade, points });
    mutate('/leaderboard');
  } catch (err) {
    return console.log(err);
  }
}