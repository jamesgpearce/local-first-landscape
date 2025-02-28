// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: 1,
  Id: 'dxos',
  Name: 'DXOS',
  Website: 'https://dxos.org',
  License: 'MIT',
  Deployment: ['Self-hosted'],
  AppTarget: {
    Platform: {
      data: ['Browser', 'Node']
    },
    LanguageSDK: {
      data: ['TypeScript']
    }
  },
  Networking: {
    Protocol: {
      data: ['WebSockets']
    },
    Topology: {
      data: 'P2P'
    }
  },
  ServerSideData: {
    PersistenceMechanism: {
      data: ['N/A']
    },
    DataModelParadigm: {
      data: 'Document'
    }
  },
  ClientSideData: {
    QueryAPI: {
      data: ['Async', 'Signals-based Reactivity']
    },
    LocalRefreshLatency: {
      data: '10-50ms'
    },
    PersistenceMechanism: {
      data: ['IndexedDB']
    },
    DataModel: {
      data: 'Document'
    },
    OfflineReads: {
      data: 'Full Support',
      comment: 'Full support within a space.'
    },
    OfflineWrites: {
      data: 'Full local conflict resolution'
    },
    DataSize: {
      data: 'up to 100mb per space'
    }
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: {
      data: ['Full Replication'],
      comment: 'Full replication within spaces.'
    },
    ConflictHandling: {
      data: 'Automatic via CRDT'
    },
    WhereResolutionOccurs: {
      data: 'Client'
    },
    WhatGetsSynced: {
      data: {
        ClientToClient: 'see automerge'
      }
    },
    Authority: {
      data: 'Decentralized'
    }
  },
  UIRelated: {
    Components: {
      data: ['Presence'],
      comment: 'SDK provides which peers you are connected to.'
    }
  },
})
