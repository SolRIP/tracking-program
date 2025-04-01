use anchor_lang::prelude::*;

declare_id!("RiPnkGhwuYN7ET3aMuGUAdomE3CFxBPUSonXsJrW4HS");

#[program]
mod solrip_contract {
    use super::*;
    pub fn init(_ctx: Context<Init>) -> Result<()> {
        Ok(())
    }
    pub fn solrip(_ctx: Context<Solrip>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Init {}
#[derive(Accounts)]
pub struct Solrip {}
