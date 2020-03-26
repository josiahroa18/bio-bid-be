module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateBid {
  count: Int!
}

type AggregateCompany {
  count: Int!
}

type AggregateStudy {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Bid {
  id: ID!
  company: Company!
  bid_amount: Float!
  is_approved: Boolean!
  study: Study!
}

type BidConnection {
  pageInfo: PageInfo!
  edges: [BidEdge]!
  aggregate: AggregateBid!
}

input BidCreateInput {
  id: ID
  company: CompanyCreateOneWithoutBidsInput!
  bid_amount: Float!
  is_approved: Boolean
  study: StudyCreateOneInput!
}

input BidCreateManyWithoutCompanyInput {
  create: [BidCreateWithoutCompanyInput!]
  connect: [BidWhereUniqueInput!]
}

input BidCreateWithoutCompanyInput {
  id: ID
  bid_amount: Float!
  is_approved: Boolean
  study: StudyCreateOneInput!
}

type BidEdge {
  node: Bid!
  cursor: String!
}

enum BidOrderByInput {
  id_ASC
  id_DESC
  bid_amount_ASC
  bid_amount_DESC
  is_approved_ASC
  is_approved_DESC
}

type BidPreviousValues {
  id: ID!
  bid_amount: Float!
  is_approved: Boolean!
}

input BidScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  bid_amount: Float
  bid_amount_not: Float
  bid_amount_in: [Float!]
  bid_amount_not_in: [Float!]
  bid_amount_lt: Float
  bid_amount_lte: Float
  bid_amount_gt: Float
  bid_amount_gte: Float
  is_approved: Boolean
  is_approved_not: Boolean
  AND: [BidScalarWhereInput!]
  OR: [BidScalarWhereInput!]
  NOT: [BidScalarWhereInput!]
}

type BidSubscriptionPayload {
  mutation: MutationType!
  node: Bid
  updatedFields: [String!]
  previousValues: BidPreviousValues
}

input BidSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BidWhereInput
  AND: [BidSubscriptionWhereInput!]
  OR: [BidSubscriptionWhereInput!]
  NOT: [BidSubscriptionWhereInput!]
}

input BidUpdateInput {
  company: CompanyUpdateOneRequiredWithoutBidsInput
  bid_amount: Float
  is_approved: Boolean
  study: StudyUpdateOneRequiredInput
}

input BidUpdateManyDataInput {
  bid_amount: Float
  is_approved: Boolean
}

input BidUpdateManyMutationInput {
  bid_amount: Float
  is_approved: Boolean
}

input BidUpdateManyWithoutCompanyInput {
  create: [BidCreateWithoutCompanyInput!]
  delete: [BidWhereUniqueInput!]
  connect: [BidWhereUniqueInput!]
  set: [BidWhereUniqueInput!]
  disconnect: [BidWhereUniqueInput!]
  update: [BidUpdateWithWhereUniqueWithoutCompanyInput!]
  upsert: [BidUpsertWithWhereUniqueWithoutCompanyInput!]
  deleteMany: [BidScalarWhereInput!]
  updateMany: [BidUpdateManyWithWhereNestedInput!]
}

input BidUpdateManyWithWhereNestedInput {
  where: BidScalarWhereInput!
  data: BidUpdateManyDataInput!
}

input BidUpdateWithoutCompanyDataInput {
  bid_amount: Float
  is_approved: Boolean
  study: StudyUpdateOneRequiredInput
}

input BidUpdateWithWhereUniqueWithoutCompanyInput {
  where: BidWhereUniqueInput!
  data: BidUpdateWithoutCompanyDataInput!
}

input BidUpsertWithWhereUniqueWithoutCompanyInput {
  where: BidWhereUniqueInput!
  update: BidUpdateWithoutCompanyDataInput!
  create: BidCreateWithoutCompanyInput!
}

input BidWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  company: CompanyWhereInput
  bid_amount: Float
  bid_amount_not: Float
  bid_amount_in: [Float!]
  bid_amount_not_in: [Float!]
  bid_amount_lt: Float
  bid_amount_lte: Float
  bid_amount_gt: Float
  bid_amount_gte: Float
  is_approved: Boolean
  is_approved_not: Boolean
  study: StudyWhereInput
  AND: [BidWhereInput!]
  OR: [BidWhereInput!]
  NOT: [BidWhereInput!]
}

input BidWhereUniqueInput {
  id: ID
}

type Company {
  id: ID!
  name: String!
  studies(where: StudyWhereInput, orderBy: StudyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Study!]
  bids(where: BidWhereInput, orderBy: BidOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bid!]
}

type CompanyConnection {
  pageInfo: PageInfo!
  edges: [CompanyEdge]!
  aggregate: AggregateCompany!
}

input CompanyCreateInput {
  id: ID
  name: String!
  studies: StudyCreateManyWithoutCompanyInput
  bids: BidCreateManyWithoutCompanyInput
}

input CompanyCreateOneWithoutBidsInput {
  create: CompanyCreateWithoutBidsInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateOneWithoutStudiesInput {
  create: CompanyCreateWithoutStudiesInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateWithoutBidsInput {
  id: ID
  name: String!
  studies: StudyCreateManyWithoutCompanyInput
}

input CompanyCreateWithoutStudiesInput {
  id: ID
  name: String!
  bids: BidCreateManyWithoutCompanyInput
}

type CompanyEdge {
  node: Company!
  cursor: String!
}

enum CompanyOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type CompanyPreviousValues {
  id: ID!
  name: String!
}

type CompanySubscriptionPayload {
  mutation: MutationType!
  node: Company
  updatedFields: [String!]
  previousValues: CompanyPreviousValues
}

input CompanySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CompanyWhereInput
  AND: [CompanySubscriptionWhereInput!]
  OR: [CompanySubscriptionWhereInput!]
  NOT: [CompanySubscriptionWhereInput!]
}

input CompanyUpdateInput {
  name: String
  studies: StudyUpdateManyWithoutCompanyInput
  bids: BidUpdateManyWithoutCompanyInput
}

input CompanyUpdateManyMutationInput {
  name: String
}

input CompanyUpdateOneRequiredWithoutBidsInput {
  create: CompanyCreateWithoutBidsInput
  update: CompanyUpdateWithoutBidsDataInput
  upsert: CompanyUpsertWithoutBidsInput
  connect: CompanyWhereUniqueInput
}

input CompanyUpdateOneRequiredWithoutStudiesInput {
  create: CompanyCreateWithoutStudiesInput
  update: CompanyUpdateWithoutStudiesDataInput
  upsert: CompanyUpsertWithoutStudiesInput
  connect: CompanyWhereUniqueInput
}

input CompanyUpdateWithoutBidsDataInput {
  name: String
  studies: StudyUpdateManyWithoutCompanyInput
}

input CompanyUpdateWithoutStudiesDataInput {
  name: String
  bids: BidUpdateManyWithoutCompanyInput
}

input CompanyUpsertWithoutBidsInput {
  update: CompanyUpdateWithoutBidsDataInput!
  create: CompanyCreateWithoutBidsInput!
}

input CompanyUpsertWithoutStudiesInput {
  update: CompanyUpdateWithoutStudiesDataInput!
  create: CompanyCreateWithoutStudiesInput!
}

input CompanyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  studies_every: StudyWhereInput
  studies_some: StudyWhereInput
  studies_none: StudyWhereInput
  bids_every: BidWhereInput
  bids_some: BidWhereInput
  bids_none: BidWhereInput
  AND: [CompanyWhereInput!]
  OR: [CompanyWhereInput!]
  NOT: [CompanyWhereInput!]
}

input CompanyWhereUniqueInput {
  id: ID
  name: String
}

scalar Long

type Mutation {
  createBid(data: BidCreateInput!): Bid!
  updateBid(data: BidUpdateInput!, where: BidWhereUniqueInput!): Bid
  updateManyBids(data: BidUpdateManyMutationInput!, where: BidWhereInput): BatchPayload!
  upsertBid(where: BidWhereUniqueInput!, create: BidCreateInput!, update: BidUpdateInput!): Bid!
  deleteBid(where: BidWhereUniqueInput!): Bid
  deleteManyBids(where: BidWhereInput): BatchPayload!
  createCompany(data: CompanyCreateInput!): Company!
  updateCompany(data: CompanyUpdateInput!, where: CompanyWhereUniqueInput!): Company
  updateManyCompanies(data: CompanyUpdateManyMutationInput!, where: CompanyWhereInput): BatchPayload!
  upsertCompany(where: CompanyWhereUniqueInput!, create: CompanyCreateInput!, update: CompanyUpdateInput!): Company!
  deleteCompany(where: CompanyWhereUniqueInput!): Company
  deleteManyCompanies(where: CompanyWhereInput): BatchPayload!
  createStudy(data: StudyCreateInput!): Study!
  updateStudy(data: StudyUpdateInput!, where: StudyWhereUniqueInput!): Study
  updateManyStudies(data: StudyUpdateManyMutationInput!, where: StudyWhereInput): BatchPayload!
  upsertStudy(where: StudyWhereUniqueInput!, create: StudyCreateInput!, update: StudyUpdateInput!): Study!
  deleteStudy(where: StudyWhereUniqueInput!): Study
  deleteManyStudies(where: StudyWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  bid(where: BidWhereUniqueInput!): Bid
  bids(where: BidWhereInput, orderBy: BidOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bid]!
  bidsConnection(where: BidWhereInput, orderBy: BidOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BidConnection!
  company(where: CompanyWhereUniqueInput!): Company
  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company]!
  companiesConnection(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompanyConnection!
  study(where: StudyWhereUniqueInput!): Study
  studies(where: StudyWhereInput, orderBy: StudyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Study]!
  studiesConnection(where: StudyWhereInput, orderBy: StudyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StudyConnection!
  node(id: ID!): Node
}

type Study {
  id: ID!
  name: String!
  area: String!
  phase: Int!
  status: String!
  company: Company!
}

type StudyConnection {
  pageInfo: PageInfo!
  edges: [StudyEdge]!
  aggregate: AggregateStudy!
}

input StudyCreateInput {
  id: ID
  name: String!
  area: String!
  phase: Int!
  status: String!
  company: CompanyCreateOneWithoutStudiesInput!
}

input StudyCreateManyWithoutCompanyInput {
  create: [StudyCreateWithoutCompanyInput!]
  connect: [StudyWhereUniqueInput!]
}

input StudyCreateOneInput {
  create: StudyCreateInput
  connect: StudyWhereUniqueInput
}

input StudyCreateWithoutCompanyInput {
  id: ID
  name: String!
  area: String!
  phase: Int!
  status: String!
}

type StudyEdge {
  node: Study!
  cursor: String!
}

enum StudyOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  area_ASC
  area_DESC
  phase_ASC
  phase_DESC
  status_ASC
  status_DESC
}

type StudyPreviousValues {
  id: ID!
  name: String!
  area: String!
  phase: Int!
  status: String!
}

input StudyScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  area: String
  area_not: String
  area_in: [String!]
  area_not_in: [String!]
  area_lt: String
  area_lte: String
  area_gt: String
  area_gte: String
  area_contains: String
  area_not_contains: String
  area_starts_with: String
  area_not_starts_with: String
  area_ends_with: String
  area_not_ends_with: String
  phase: Int
  phase_not: Int
  phase_in: [Int!]
  phase_not_in: [Int!]
  phase_lt: Int
  phase_lte: Int
  phase_gt: Int
  phase_gte: Int
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  AND: [StudyScalarWhereInput!]
  OR: [StudyScalarWhereInput!]
  NOT: [StudyScalarWhereInput!]
}

type StudySubscriptionPayload {
  mutation: MutationType!
  node: Study
  updatedFields: [String!]
  previousValues: StudyPreviousValues
}

input StudySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StudyWhereInput
  AND: [StudySubscriptionWhereInput!]
  OR: [StudySubscriptionWhereInput!]
  NOT: [StudySubscriptionWhereInput!]
}

input StudyUpdateDataInput {
  name: String
  area: String
  phase: Int
  status: String
  company: CompanyUpdateOneRequiredWithoutStudiesInput
}

input StudyUpdateInput {
  name: String
  area: String
  phase: Int
  status: String
  company: CompanyUpdateOneRequiredWithoutStudiesInput
}

input StudyUpdateManyDataInput {
  name: String
  area: String
  phase: Int
  status: String
}

input StudyUpdateManyMutationInput {
  name: String
  area: String
  phase: Int
  status: String
}

input StudyUpdateManyWithoutCompanyInput {
  create: [StudyCreateWithoutCompanyInput!]
  delete: [StudyWhereUniqueInput!]
  connect: [StudyWhereUniqueInput!]
  set: [StudyWhereUniqueInput!]
  disconnect: [StudyWhereUniqueInput!]
  update: [StudyUpdateWithWhereUniqueWithoutCompanyInput!]
  upsert: [StudyUpsertWithWhereUniqueWithoutCompanyInput!]
  deleteMany: [StudyScalarWhereInput!]
  updateMany: [StudyUpdateManyWithWhereNestedInput!]
}

input StudyUpdateManyWithWhereNestedInput {
  where: StudyScalarWhereInput!
  data: StudyUpdateManyDataInput!
}

input StudyUpdateOneRequiredInput {
  create: StudyCreateInput
  update: StudyUpdateDataInput
  upsert: StudyUpsertNestedInput
  connect: StudyWhereUniqueInput
}

input StudyUpdateWithoutCompanyDataInput {
  name: String
  area: String
  phase: Int
  status: String
}

input StudyUpdateWithWhereUniqueWithoutCompanyInput {
  where: StudyWhereUniqueInput!
  data: StudyUpdateWithoutCompanyDataInput!
}

input StudyUpsertNestedInput {
  update: StudyUpdateDataInput!
  create: StudyCreateInput!
}

input StudyUpsertWithWhereUniqueWithoutCompanyInput {
  where: StudyWhereUniqueInput!
  update: StudyUpdateWithoutCompanyDataInput!
  create: StudyCreateWithoutCompanyInput!
}

input StudyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  area: String
  area_not: String
  area_in: [String!]
  area_not_in: [String!]
  area_lt: String
  area_lte: String
  area_gt: String
  area_gte: String
  area_contains: String
  area_not_contains: String
  area_starts_with: String
  area_not_starts_with: String
  area_ends_with: String
  area_not_ends_with: String
  phase: Int
  phase_not: Int
  phase_in: [Int!]
  phase_not_in: [Int!]
  phase_lt: Int
  phase_lte: Int
  phase_gt: Int
  phase_gte: Int
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  company: CompanyWhereInput
  AND: [StudyWhereInput!]
  OR: [StudyWhereInput!]
  NOT: [StudyWhereInput!]
}

input StudyWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  bid(where: BidSubscriptionWhereInput): BidSubscriptionPayload
  company(where: CompanySubscriptionWhereInput): CompanySubscriptionPayload
  study(where: StudySubscriptionWhereInput): StudySubscriptionPayload
}
`
      }
    