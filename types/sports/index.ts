import { getType } from '@reduxjs/toolkit';

export interface FixtureItemProps {
  score: any;
  fixture: any;
  league: {
    name: string;
  };
  teams: {
    home: {
      name: string;
      logo: string;
    };
    away: {
      name: string;
      logo: string;
    };
    status: {
      short: string;
    };
    venue: {
      name: string;
    };
  };
}

export interface FullFixtureProps {
  fixture: {
    id: number;
    date: string;
    venue: {
      name: string;
      city: string;
    };
    status: {
      short: string;
    };
  };
  league: {
    name: string;
    logo: string;
  };
  teams: {
    home: {
      name: string;
      logo: string;
    };
    away: {
      name: string;
      logo: string;
    };
  };
  goals: {
    home: number;
    away: number;
  };
  score: {
    halftime: {
      home: number;
      away: number;
    };
    fulltime: {
      home: number;
      away: number;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
}

export type TableItemProps = {
  rank: number;
  team: {
    logo: string;
    name: string;
  };
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
  points: number;
};
