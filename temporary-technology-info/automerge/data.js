// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: 1,
  Id: 'automerge',
  Name: 'Automerge',
  Website: 'https://automerge.org',
  GetStarted: 'https://automerge.org/docs/hello/',
  License: 'MIT',
  Deployment: ['Self-hosted'],
  Networking: {
    Topology: {
      data: 'P2P via Relay Servers',
      comment: 'Coming soon: Beelay'
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
      data: ['Async']
    },
    PersistenceMechanism: {
      data: ['IndexedDB']
    },
    DataModel: {
      data: 'Document'
    },
    OfflineReads: {
      data: 'Full Support',
      comment: 'Full support within an automerge document.'
    },
    OfflineWrites: {
      data: 'Full local conflict resolution'
    },
    DataSize: {
      data: 'up to 5-10mb per doc'
    }
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: {
      data: ['Full Replication'],
      comment: 'Full replication within documents.'
    },
    ConflictHandling: {
      data: 'Automatic via CRDT',
      comment: 'Automatic via CRDTs for Maps, Lists, Text. If there are conflicts: LWW / MVCC.'
    },
    WhereResolutionOccurs: {
      data: 'Client'
    },
    WhatGetsSynced: {
      data: { ClientToClient: 'ops' },
      comment: 'Future: snapshots via relays'
    },
    Authority: {
      data: 'Decentralized'
    }
  }
})
