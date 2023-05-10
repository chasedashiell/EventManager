import useSWR from 'swr';
import http from '../http';
import { Group } from '../models/Group';

export default () => {
  return useSWR<Group[]>('/leaderboard', async () => {
    const res = await http.get('/leaderboard');
    return res.data;
  });
}