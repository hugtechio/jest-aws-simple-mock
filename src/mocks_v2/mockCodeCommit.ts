
function attachMock(method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require('aws-sdk')
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(currentVersion(awsSdkObject.services).prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  
const currentVersion = (services: any): any => {
  const keys = Object.keys(services);
  let service = null;
  keys.forEach(versionStr => {
    if (
      services.hasOwnProperty(versionStr) &&
      services[versionStr] !== null &&
      services[versionStr] !== undefined
    ) {
      service = services[versionStr];
      return;
    }
  });

  return service;
};
  export const mockCodeCommit = {
  associateApprovalRuleTemplateWithRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateApprovalRuleTemplateWithRepository', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  associateApprovalRuleTemplateWithRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateApprovalRuleTemplateWithRepository', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  associateApprovalRuleTemplateWithRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateApprovalRuleTemplateWithRepository', 'CodeCommit', Promise.reject(result), true, mock)
  },
  batchAssociateApprovalRuleTemplateWithRepositories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchAssociateApprovalRuleTemplateWithRepositories', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  batchAssociateApprovalRuleTemplateWithRepositoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchAssociateApprovalRuleTemplateWithRepositories', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  batchAssociateApprovalRuleTemplateWithRepositoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchAssociateApprovalRuleTemplateWithRepositories', 'CodeCommit', Promise.reject(result), true, mock)
  },
  batchDescribeMergeConflicts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDescribeMergeConflicts', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  batchDescribeMergeConflictsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDescribeMergeConflicts', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  batchDescribeMergeConflictsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDescribeMergeConflicts', 'CodeCommit', Promise.reject(result), true, mock)
  },
  batchDisassociateApprovalRuleTemplateFromRepositories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisassociateApprovalRuleTemplateFromRepositories', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  batchDisassociateApprovalRuleTemplateFromRepositoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisassociateApprovalRuleTemplateFromRepositories', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  batchDisassociateApprovalRuleTemplateFromRepositoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisassociateApprovalRuleTemplateFromRepositories', 'CodeCommit', Promise.reject(result), true, mock)
  },
  batchGetCommits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetCommits', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  batchGetCommitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetCommits', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  batchGetCommitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetCommits', 'CodeCommit', Promise.reject(result), true, mock)
  },
  batchGetRepositories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetRepositories', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  batchGetRepositoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetRepositories', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  batchGetRepositoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetRepositories', 'CodeCommit', Promise.reject(result), true, mock)
  },
  createApprovalRuleTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApprovalRuleTemplate', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  createApprovalRuleTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApprovalRuleTemplate', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  createApprovalRuleTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApprovalRuleTemplate', 'CodeCommit', Promise.reject(result), true, mock)
  },
  createBranch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBranch', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  createBranchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBranch', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  createBranchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBranch', 'CodeCommit', Promise.reject(result), true, mock)
  },
  createCommit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCommit', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  createCommitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCommit', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  createCommitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCommit', 'CodeCommit', Promise.reject(result), true, mock)
  },
  createPullRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPullRequest', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  createPullRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPullRequest', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  createPullRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPullRequest', 'CodeCommit', Promise.reject(result), true, mock)
  },
  createPullRequestApprovalRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPullRequestApprovalRule', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  createPullRequestApprovalRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPullRequestApprovalRule', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  createPullRequestApprovalRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPullRequestApprovalRule', 'CodeCommit', Promise.reject(result), true, mock)
  },
  createRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRepository', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  createRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRepository', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  createRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRepository', 'CodeCommit', Promise.reject(result), true, mock)
  },
  createUnreferencedMergeCommit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUnreferencedMergeCommit', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  createUnreferencedMergeCommitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUnreferencedMergeCommit', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  createUnreferencedMergeCommitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUnreferencedMergeCommit', 'CodeCommit', Promise.reject(result), true, mock)
  },
  deleteApprovalRuleTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApprovalRuleTemplate', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  deleteApprovalRuleTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApprovalRuleTemplate', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  deleteApprovalRuleTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApprovalRuleTemplate', 'CodeCommit', Promise.reject(result), true, mock)
  },
  deleteBranch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBranch', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  deleteBranchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBranch', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  deleteBranchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBranch', 'CodeCommit', Promise.reject(result), true, mock)
  },
  deleteCommentContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCommentContent', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  deleteCommentContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCommentContent', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  deleteCommentContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCommentContent', 'CodeCommit', Promise.reject(result), true, mock)
  },
  deleteFile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFile', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  deleteFileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFile', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  deleteFileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFile', 'CodeCommit', Promise.reject(result), true, mock)
  },
  deletePullRequestApprovalRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePullRequestApprovalRule', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  deletePullRequestApprovalRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePullRequestApprovalRule', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  deletePullRequestApprovalRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePullRequestApprovalRule', 'CodeCommit', Promise.reject(result), true, mock)
  },
  deleteRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRepository', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  deleteRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRepository', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  deleteRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRepository', 'CodeCommit', Promise.reject(result), true, mock)
  },
  describeMergeConflicts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMergeConflicts', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  describeMergeConflictsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMergeConflicts', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  describeMergeConflictsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMergeConflicts', 'CodeCommit', Promise.reject(result), true, mock)
  },
  describePullRequestEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePullRequestEvents', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  describePullRequestEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePullRequestEvents', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  describePullRequestEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePullRequestEvents', 'CodeCommit', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeCommit', Promise.reject(result), true, mock)
  },
  disassociateApprovalRuleTemplateFromRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateApprovalRuleTemplateFromRepository', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  disassociateApprovalRuleTemplateFromRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateApprovalRuleTemplateFromRepository', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  disassociateApprovalRuleTemplateFromRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateApprovalRuleTemplateFromRepository', 'CodeCommit', Promise.reject(result), true, mock)
  },
  evaluatePullRequestApprovalRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('evaluatePullRequestApprovalRules', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  evaluatePullRequestApprovalRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('evaluatePullRequestApprovalRules', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  evaluatePullRequestApprovalRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('evaluatePullRequestApprovalRules', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getApprovalRuleTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApprovalRuleTemplate', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getApprovalRuleTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApprovalRuleTemplate', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getApprovalRuleTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApprovalRuleTemplate', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getBlob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlob', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getBlobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlob', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getBlobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlob', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getBranch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBranch', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getBranchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBranch', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getBranchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBranch', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getComment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComment', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getCommentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComment', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getCommentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComment', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getCommentReactions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCommentReactions', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getCommentReactionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCommentReactions', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getCommentReactionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCommentReactions', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getCommentsForComparedCommit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCommentsForComparedCommit', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getCommentsForComparedCommitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCommentsForComparedCommit', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getCommentsForComparedCommitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCommentsForComparedCommit', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getCommentsForPullRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCommentsForPullRequest', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getCommentsForPullRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCommentsForPullRequest', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getCommentsForPullRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCommentsForPullRequest', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getCommit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCommit', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getCommitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCommit', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getCommitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCommit', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getDifferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDifferences', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getDifferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDifferences', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getDifferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDifferences', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getFile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFile', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getFileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFile', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getFileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFile', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFolder', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFolder', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFolder', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getMergeCommit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMergeCommit', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getMergeCommitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMergeCommit', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getMergeCommitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMergeCommit', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getMergeConflicts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMergeConflicts', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getMergeConflictsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMergeConflicts', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getMergeConflictsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMergeConflicts', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getMergeOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMergeOptions', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getMergeOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMergeOptions', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getMergeOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMergeOptions', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getPullRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPullRequest', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getPullRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPullRequest', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getPullRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPullRequest', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getPullRequestApprovalStates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPullRequestApprovalStates', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getPullRequestApprovalStatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPullRequestApprovalStates', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getPullRequestApprovalStatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPullRequestApprovalStates', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getPullRequestOverrideState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPullRequestOverrideState', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getPullRequestOverrideStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPullRequestOverrideState', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getPullRequestOverrideStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPullRequestOverrideState', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRepository', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRepository', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRepository', 'CodeCommit', Promise.reject(result), true, mock)
  },
  getRepositoryTriggers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRepositoryTriggers', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  getRepositoryTriggersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRepositoryTriggers', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  getRepositoryTriggersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRepositoryTriggers', 'CodeCommit', Promise.reject(result), true, mock)
  },
  listApprovalRuleTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApprovalRuleTemplates', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  listApprovalRuleTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApprovalRuleTemplates', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  listApprovalRuleTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApprovalRuleTemplates', 'CodeCommit', Promise.reject(result), true, mock)
  },
  listAssociatedApprovalRuleTemplatesForRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociatedApprovalRuleTemplatesForRepository', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  listAssociatedApprovalRuleTemplatesForRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociatedApprovalRuleTemplatesForRepository', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  listAssociatedApprovalRuleTemplatesForRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociatedApprovalRuleTemplatesForRepository', 'CodeCommit', Promise.reject(result), true, mock)
  },
  listBranches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBranches', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  listBranchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBranches', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  listBranchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBranches', 'CodeCommit', Promise.reject(result), true, mock)
  },
  listPullRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPullRequests', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  listPullRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPullRequests', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  listPullRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPullRequests', 'CodeCommit', Promise.reject(result), true, mock)
  },
  listRepositories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRepositories', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  listRepositoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRepositories', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  listRepositoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRepositories', 'CodeCommit', Promise.reject(result), true, mock)
  },
  listRepositoriesForApprovalRuleTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRepositoriesForApprovalRuleTemplate', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  listRepositoriesForApprovalRuleTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRepositoriesForApprovalRuleTemplate', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  listRepositoriesForApprovalRuleTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRepositoriesForApprovalRuleTemplate', 'CodeCommit', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodeCommit', Promise.reject(result), true, mock)
  },
  mergeBranchesByFastForward: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeBranchesByFastForward', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  mergeBranchesByFastForwardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeBranchesByFastForward', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  mergeBranchesByFastForwardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeBranchesByFastForward', 'CodeCommit', Promise.reject(result), true, mock)
  },
  mergeBranchesBySquash: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeBranchesBySquash', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  mergeBranchesBySquashAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeBranchesBySquash', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  mergeBranchesBySquashThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeBranchesBySquash', 'CodeCommit', Promise.reject(result), true, mock)
  },
  mergeBranchesByThreeWay: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeBranchesByThreeWay', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  mergeBranchesByThreeWayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeBranchesByThreeWay', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  mergeBranchesByThreeWayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeBranchesByThreeWay', 'CodeCommit', Promise.reject(result), true, mock)
  },
  mergePullRequestByFastForward: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergePullRequestByFastForward', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  mergePullRequestByFastForwardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergePullRequestByFastForward', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  mergePullRequestByFastForwardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergePullRequestByFastForward', 'CodeCommit', Promise.reject(result), true, mock)
  },
  mergePullRequestBySquash: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergePullRequestBySquash', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  mergePullRequestBySquashAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergePullRequestBySquash', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  mergePullRequestBySquashThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergePullRequestBySquash', 'CodeCommit', Promise.reject(result), true, mock)
  },
  mergePullRequestByThreeWay: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergePullRequestByThreeWay', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  mergePullRequestByThreeWayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergePullRequestByThreeWay', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  mergePullRequestByThreeWayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergePullRequestByThreeWay', 'CodeCommit', Promise.reject(result), true, mock)
  },
  overridePullRequestApprovalRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('overridePullRequestApprovalRules', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  overridePullRequestApprovalRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('overridePullRequestApprovalRules', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  overridePullRequestApprovalRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('overridePullRequestApprovalRules', 'CodeCommit', Promise.reject(result), true, mock)
  },
  postCommentForComparedCommit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postCommentForComparedCommit', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  postCommentForComparedCommitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postCommentForComparedCommit', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  postCommentForComparedCommitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postCommentForComparedCommit', 'CodeCommit', Promise.reject(result), true, mock)
  },
  postCommentForPullRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postCommentForPullRequest', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  postCommentForPullRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postCommentForPullRequest', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  postCommentForPullRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postCommentForPullRequest', 'CodeCommit', Promise.reject(result), true, mock)
  },
  postCommentReply: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postCommentReply', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  postCommentReplyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postCommentReply', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  postCommentReplyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postCommentReply', 'CodeCommit', Promise.reject(result), true, mock)
  },
  putCommentReaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putCommentReaction', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  putCommentReactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putCommentReaction', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  putCommentReactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putCommentReaction', 'CodeCommit', Promise.reject(result), true, mock)
  },
  putFile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFile', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  putFileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFile', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  putFileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFile', 'CodeCommit', Promise.reject(result), true, mock)
  },
  putRepositoryTriggers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRepositoryTriggers', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  putRepositoryTriggersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRepositoryTriggers', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  putRepositoryTriggersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRepositoryTriggers', 'CodeCommit', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodeCommit', Promise.reject(result), true, mock)
  },
  testRepositoryTriggers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testRepositoryTriggers', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  testRepositoryTriggersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testRepositoryTriggers', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  testRepositoryTriggersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testRepositoryTriggers', 'CodeCommit', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodeCommit', Promise.reject(result), true, mock)
  },
  updateApprovalRuleTemplateContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApprovalRuleTemplateContent', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  updateApprovalRuleTemplateContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApprovalRuleTemplateContent', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  updateApprovalRuleTemplateContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApprovalRuleTemplateContent', 'CodeCommit', Promise.reject(result), true, mock)
  },
  updateApprovalRuleTemplateDescription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApprovalRuleTemplateDescription', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  updateApprovalRuleTemplateDescriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApprovalRuleTemplateDescription', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  updateApprovalRuleTemplateDescriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApprovalRuleTemplateDescription', 'CodeCommit', Promise.reject(result), true, mock)
  },
  updateApprovalRuleTemplateName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApprovalRuleTemplateName', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  updateApprovalRuleTemplateNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApprovalRuleTemplateName', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  updateApprovalRuleTemplateNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApprovalRuleTemplateName', 'CodeCommit', Promise.reject(result), true, mock)
  },
  updateComment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateComment', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  updateCommentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateComment', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  updateCommentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateComment', 'CodeCommit', Promise.reject(result), true, mock)
  },
  updateDefaultBranch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDefaultBranch', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  updateDefaultBranchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDefaultBranch', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  updateDefaultBranchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDefaultBranch', 'CodeCommit', Promise.reject(result), true, mock)
  },
  updatePullRequestApprovalRuleContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePullRequestApprovalRuleContent', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  updatePullRequestApprovalRuleContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePullRequestApprovalRuleContent', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  updatePullRequestApprovalRuleContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePullRequestApprovalRuleContent', 'CodeCommit', Promise.reject(result), true, mock)
  },
  updatePullRequestApprovalState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePullRequestApprovalState', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  updatePullRequestApprovalStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePullRequestApprovalState', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  updatePullRequestApprovalStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePullRequestApprovalState', 'CodeCommit', Promise.reject(result), true, mock)
  },
  updatePullRequestDescription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePullRequestDescription', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  updatePullRequestDescriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePullRequestDescription', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  updatePullRequestDescriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePullRequestDescription', 'CodeCommit', Promise.reject(result), true, mock)
  },
  updatePullRequestStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePullRequestStatus', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  updatePullRequestStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePullRequestStatus', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  updatePullRequestStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePullRequestStatus', 'CodeCommit', Promise.reject(result), true, mock)
  },
  updatePullRequestTitle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePullRequestTitle', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  updatePullRequestTitleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePullRequestTitle', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  updatePullRequestTitleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePullRequestTitle', 'CodeCommit', Promise.reject(result), true, mock)
  },
  updateRepositoryDescription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRepositoryDescription', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  updateRepositoryDescriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRepositoryDescription', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  updateRepositoryDescriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRepositoryDescription', 'CodeCommit', Promise.reject(result), true, mock)
  },
  updateRepositoryName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRepositoryName', 'CodeCommit', Promise.resolve(result), true, mock)
  },
  updateRepositoryNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRepositoryName', 'CodeCommit', Promise.resolve(result), false, mock)
  },
  updateRepositoryNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRepositoryName', 'CodeCommit', Promise.reject(result), true, mock)
  },
}
