import { HoppGQLRequest } from "@hoppscotch/data"

export type HoppGQLSaveContext =
  | {
      /**
       * The origin source of the request
       */
      originLocation: "user-collection"
      /**
       * Path to the request folder
       */
      folderPath: string
      /**
       * Index to the request
       */
      requestIndex: number
    }
  | {
      /**
       * The origin source of the request
       */
      originLocation: "team-collection"
      /**
       * ID of the request in the team
       */
      requestID: string
      /**
       * ID of the team
       */
      teamID?: string
      /**
       * ID of the collection loaded
       */
      collectionID?: string
    }
  | null

/**
 * Defines a live 'document' (something that is open and being edited) in the app
 */
export type HoppGQLDocument = {
  /**
   * The request as it is in the document
   */
  request: HoppGQLRequest

  /**
   * Whether the request has any unsaved changes
   * (atleast as far as we can say)
   */
  isDirty: boolean

  /**
   * Info about where this request should be saved.
   * This contains where the request is originated from basically.
   */
  saveContext?: HoppGQLSaveContext
}
