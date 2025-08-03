// SPARC API Response Types
export interface SparcSearchResponse {
  took: number;
  timed_out: boolean;
  _shards: {
    total: number;
    successful: number;
    skipped: number;
    failed: number;
  };
  hits: {
    total: {
      value: number;
      relation: string;
    };
    max_score: number;
    hits: SparcDatasetHit[];
  };
  aggregations?: Record<string, any>;
}

export interface SparcDatasetHit {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: SparcDataset;
}

export interface SparcDataset {
  item: {
    version: string;
    types: string[];
    contentTypes: string[];
    statistics: {
      numberOfFiles: number;
      numberOfSubjects: number;
      numberOfSamples: number;
      numberOfBytes: number;
    };
    keywords: string[];
    published: boolean;
    name: string;
    description: string;
    readme: string;
  };
  supportingAwards: Array<{
    awardId: string;
    title: string;
  }>;
  pennsieve: {
    identifier: string;
    version: string;
    createdAt: string;
    updatedAt: string;
  };
  contributors: Array<{
    firstName: string;
    lastName: string;
    email: string;
    affiliation: string;
    contributorType: string;
  }>;
  distributions: Array<{
    uri: string;
    format: string;
  }>;
  protocols: Array<{
    doi: string;
    title: string;
    description: string;
  }>;
  organisms: Array<{
    name: string;
    taxonomy: {
      id: string;
      name: string;
    };
  }>;
  attributes: {
    subject?: {
      sex?: {
        value: string[];
      };
      age?: {
        value: string[];
      };
      species?: {
        value: string[];
      };
    };
  };
  dates: {
    created: string;
    modified: string;
    published?: string;
  };
  anatomy: Array<{
    organ: {
      name: {
        aggregate: string;
      };
    };
  }>;
  provenance: {
    origin: string;
    lastModified: string;
  };
}

// Search Query Types
export interface SparcSearchQuery {
  size?: number;
  from?: number;
  query?: {
    query_string?: {
      query: string;
    };
    bool?: {
      must?: any[];
      should?: any[];
      filter?: any[];
    };
  };
  aggregations?: Record<string, any>;
  sort?: any[];
}


export interface SparcApiConfig {
  apiKey: string;
  baseUrl?: string;
  index?: string;
}